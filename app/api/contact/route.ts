/**
 * Contact form handler — POST /api/contact
 *
 * Receives the lead-gen form submission from the homepage, validates
 * the fields, and emails it to the Keldya inbox via Resend. Returns
 * a JSON status so the client can show success / error.
 *
 * Env (set via Vercel project env vars, not in wrangler):
 *   RESEND_API_KEY
 *   CONTACT_FROM_EMAIL  (the verified sender — Gmail until domain is
 *                        verified, e.g. "Keldya <keldyallc@gmail.com>")
 *   CONTACT_TO_EMAIL    (where the lead lands — same address until
 *                        a keldya.com inbox is set up, default
 *                        keldyallc@gmail.com)
 *
 * Until Resend verifies the keldya.com domain (post-domain-purchase),
 * the only safe values for these vars are the keldyallc@gmail.com
 * address. Resend's free tier only sends FROM verified addresses.
 *
 * No DB, no analytics — just a clean email. We can add a CRM
 * (Notion, Airtable, HubSpot) later if volume justifies it.
 */

import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PROJECT_TYPES = new Set(["web-app", "mobile", "ai-ml", "automation", "ecom", "other"]);
const BUDGETS = new Set(["", "<10k", "10k-25k", "25k-50k", "50k+", "tbd"]);

function bad(message: string, status = 400) {
  return NextResponse.json({ ok: false, error: message }, { status });
}

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(req: Request): Promise<NextResponse> {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return bad("Invalid JSON");
  }

  const name = clean(body.name, 120);
  const email = clean(body.email, 160);
  const company = clean(body.company, 160);
  const projectType = clean(body.projectType, 32);
  const budget = clean(body.budget, 16);
  const message = clean(body.message, 2000);

  if (!name) return bad("Name is required");
  if (!email || !EMAIL_RE.test(email)) return bad("Valid email is required");
  if (!projectType || !PROJECT_TYPES.has(projectType)) return bad("Pick a project type");
  if (!BUDGETS.has(budget)) return bad("Invalid budget selection");
  if (message.length < 20) return bad("Tell us a bit more about the project (at least 20 chars)");

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !to) {
    // Don't crash in dev — log + return success-shaped error so the
    // user sees something useful instead of a generic 500.
    console.error("[/api/contact] missing RESEND_API_KEY / CONTACT_FROM_EMAIL / CONTACT_TO_EMAIL");
    return bad("Server is not configured to receive contact submissions yet. Email keldyallc@gmail.com directly.", 503);
  }

  const subject = `[Keldya] New lead: ${name}${company ? ` (${company})` : ""} — ${projectType}`;
  const text = [
    `New lead from keldya.com`,
    ``,
    `Name:     ${name}`,
    `Email:    ${email}`,
    `Company:  ${company || "—"}`,
    `Type:     ${projectType}`,
    `Budget:   ${budget || "—"}`,
    ``,
    `Message:`,
    message,
    ``,
    `—`,
    `Sent at ${new Date().toISOString()}`,
  ].join("\n");

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject,
      text,
    }),
  });

  if (!res.ok) {
    const bodyText = await res.text();
    console.error("[/api/contact] Resend failed:", res.status, bodyText);
    return bad("Email service is unavailable. Try again or email keldyallc@gmail.com directly.", 502);
  }

  return NextResponse.json({ ok: true });
}
