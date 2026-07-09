"use client";

import Link from "next/link";

interface PillarProps {
  name: string;
  description: string;
  /** When provided, the card is a clickable Link/anchor. When omitted,
   *  the card is rendered as a non-interactive <div> with reduced hover. */
  href?: string;
  external?: boolean;
  status: { kind: "live" | "dev" | "partner" | "archive" | "soon"; label: string };
}

const STATUS_CLASS: Record<PillarProps["status"]["kind"], string> = {
  live: "tag tag--live",
  dev: "tag tag--dev",
  partner: "tag tag--partner",
  archive: "tag tag--archive",
  soon: "tag tag--soon",
};

export function Pillar({ name, description, href, external, status }: PillarProps) {
  const isInteractive = Boolean(href);
  const className = `pillar ${isInteractive ? "" : "pillar--disabled"}`;

  const inner = (
    <>
      <div className="pillar__head">
        <h3 className="pillar__name">{name}</h3>
        {isInteractive ? (
          <span className="pillar__arrow" aria-hidden="true">↗</span>
        ) : (
          <span
            className="pillar__lock"
            aria-hidden="true"
            title="Coming soon — needs a custom domain"
          >
            ◌
          </span>
        )}
      </div>
      <p className="pillar__desc">{description}</p>
      <div className="pillar__meta">
        <span className={STATUS_CLASS[status.kind]}>{status.label}</span>
      </div>
    </>
  );

  if (isInteractive) {
    return (
      <Link
        href={href as string}
        className={className}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className={className} aria-disabled="true">
      {inner}
    </div>
  );
}
