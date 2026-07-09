"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "err";

const BUDGET_OPTIONS = [
  { value: "", label: "Select a range…" },
  { value: "<10k", label: "Under $10k" },
  { value: "10k-25k", label: "$10k – $25k" },
  { value: "25k-50k", label: "$25k – $50k" },
  { value: "50k+", label: "$50k+" },
  { value: "tbd", label: "Not sure yet" },
];

const PROJECT_TYPES = [
  { value: "web-app", label: "Web app / SaaS" },
  { value: "mobile", label: "Mobile / iOS / Android" },
  { value: "ai-ml", label: "AI / ML integration" },
  { value: "automation", label: "Workflow automation" },
  { value: "ecom", label: "E-commerce / storefront" },
  { value: "other", label: "Something else" },
];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string };
        throw new Error(body.error ?? "Something went wrong");
      }
      setStatus("ok");
      setMessage("Got it. We'll be in touch within 1 business day.");
      form.reset();
    } catch (err) {
      setStatus("err");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <input id="name" name="name" type="text" required maxLength={120} autoComplete="name" />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required maxLength={160} autoComplete="email" />
      </div>
      <div className="form-row">
        <label htmlFor="company">Company <span className="hint">(optional)</span></label>
        <input id="company" name="company" type="text" maxLength={160} autoComplete="organization" />
      </div>
      <div className="form-row">
        <label htmlFor="projectType">What are you building?</label>
        <select id="projectType" name="projectType" required defaultValue="">
          <option value="" disabled>Pick a category…</option>
          {PROJECT_TYPES.map((p) => (
            <option key={p.value} value={p.value}>{p.label}</option>
          ))}
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="budget">Budget range <span className="hint">(optional, helps us route fast)</span></label>
        <select id="budget" name="budget" defaultValue="">
          {BUDGET_OPTIONS.map((b) => (
            <option key={b.value} value={b.value}>{b.label}</option>
          ))}
        </select>
      </div>
      <div className="form-row">
        <label htmlFor="message">What&apos;s the project?</label>
        <textarea
          id="message"
          name="message"
          required
          minLength={20}
          maxLength={2000}
          placeholder="A few sentences on what you're trying to ship, your timeline, and any constraints we should know about."
        />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn btn--primary btn--lg" disabled={status === "sending"}>
          {status === "sending" ? "Sending…" : "Send message"}
        </button>
      </div>
      <div
        className={`form-status ${status === "ok" ? "visible form-status--ok" : ""} ${status === "err" ? "visible form-status--err" : ""}`}
        role={status === "ok" || status === "err" ? "status" : undefined}
      >
        {message}
      </div>
    </form>
  );
}
