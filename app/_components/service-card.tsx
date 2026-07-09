"use client";

import type { Service } from "../_data/services";

interface ServiceCardProps {
  service: Service;
}

const BADGE_CLASS: Record<NonNullable<Service["badge"]>, string> = {
  "Most popular": "service__badge service__badge--popular",
  "Fastest start": "service__badge service__badge--fast",
  "Compliance-ready": "service__badge service__badge--compliance",
};

function formatPrice(n: number): string {
  // 2500 → "$2,500" — explicit comma formatting reads more premium
  // than the auto-locale alternative.
  return `$${n.toLocaleString("en-US")}`;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="service" id={service.id}>
      {service.badge && (
        <span className={BADGE_CLASS[service.badge]}>{service.badge}</span>
      )}
      <div className="service__head">
        <h3 className="service__name">{service.name}</h3>
        <p className="service__tagline">{service.tagline}</p>
      </div>
      <p className="service__desc">{service.description}</p>
      <ul className="service__deliverables">
        {service.deliverables.map((d) => (
          <li key={d}>{d}</li>
        ))}
      </ul>
      <div className="service__meta">
        <div className="service__meta-row">
          <span className="service__meta-label">Starting at</span>
          <span className="service__price">{formatPrice(service.startsAt)}</span>
        </div>
        <div className="service__meta-row">
          <span className="service__meta-label">Timeline</span>
          <span className="service__duration">{service.duration}</span>
        </div>
      </div>
      <p className="service__best-for">{service.bestFor}</p>
      <a
        href="#contact"
        className="btn btn--primary service__cta"
        data-service={service.id}
      >
        Get started
      </a>
    </article>
  );
}
