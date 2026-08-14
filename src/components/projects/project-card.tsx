import Link from "next/link";
import type { Project } from "@/lib/validation/schemas";
import { getUiContent } from "@/lib/content/ui";
import { getLocalePath, type Locale } from "@/lib/i18n/locales";

type ProjectCardProps = {
  locale: Locale;
  project: Project;
};

export function ProjectCard({ locale, project }: ProjectCardProps) {
  const ui = getUiContent(locale);
  const categoryLabel = ui.projects.category[project.category];
  const statusLabel = ui.projects.status[project.status];
  const showsDistinctStatus = categoryLabel !== statusLabel;

  return (
    <article className="border border-line p-6">
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm font-medium text-accent">
        <span>{categoryLabel}</span>
        {showsDistinctStatus && <><span aria-hidden="true">·</span><span>{statusLabel}</span></>}
        <span aria-hidden="true">·</span><span>{project.year}</span>
      </div>
      <h2 className="mt-5 text-2xl font-semibold tracking-tight"><Link href={getLocalePath(locale, `projects/${project.slug}`)}>{project.content.title[locale]}</Link></h2>
      <p className="mt-4 leading-7 text-muted">{project.content.summary[locale]}</p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label={ui.projects.technologies}>
        {project.technologies.map((technology) => <li className="border border-line px-2 py-1 text-sm" key={technology}>{technology}</li>)}
      </ul>
      <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 font-medium">
        <Link className="underline" href={getLocalePath(locale, `projects/${project.slug}`)}>{ui.projects.viewCaseStudy}</Link>
        {project.repositoryUrl && <a className="underline" href={project.repositoryUrl} rel="noreferrer" target="_blank">{ui.projects.repository}</a>}
      </div>
    </article>
  );
}
