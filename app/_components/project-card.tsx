import Image from "next/image";
import type { Project } from "../_data/projects";

/** Showcase card for one project: live screenshot, name, description,
 *  tags, and a link to the live build. */
export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      className="project"
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.name} — ${project.linkLabel}`}
    >
      <div className="project__shot">
        <Image
          src={`/work/${project.slug}.jpg`}
          alt={`${project.name} — homepage screenshot`}
          width={1280}
          height={800}
          sizes="(max-width: 900px) 100vw, 560px"
        />
      </div>
      <div className="project__body">
        <div className="project__head">
          <h3 className="project__name">{project.name}</h3>
          <span className="project__arrow" aria-hidden="true">
            ↗
          </span>
        </div>
        <p className="project__desc">{project.description}</p>
        <div className="project__meta">
          <span className="tag tag--live">Live</span>
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>
        <span className="project__link">{project.linkLabel} →</span>
      </div>
    </a>
  );
}
