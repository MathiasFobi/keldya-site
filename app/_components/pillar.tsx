"use client";

import Link from "next/link";

interface PillarProps {
  name: string;
  description: string;
  href: string;
  external: boolean;
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
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <Link href={href} className="pillar" {...linkProps}>
      <div className="pillar__head">
        <h3 className="pillar__name">{name}</h3>
        <span className="pillar__arrow" aria-hidden="true">↗</span>
      </div>
      <p className="pillar__desc">{description}</p>
      <div className="pillar__meta">
        <span className={STATUS_CLASS[status.kind]}>{status.label}</span>
      </div>
    </Link>
  );
}
