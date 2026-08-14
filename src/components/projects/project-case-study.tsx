import Link from "next/link";
import { GitHubIcon } from "@/components/ui/project-link-icons";
import { WebsiteIcon } from "@/components/ui/website-icon";
import type { Project } from "@/lib/validation/schemas";
import { getUiContent } from "@/lib/content/ui";
import { getLocalePath, type Locale } from "@/lib/i18n/locales";

type ProjectCaseStudyProps = {
  locale: Locale;
  project: Project;
};

export function ProjectCaseStudy({ locale, project }: ProjectCaseStudyProps) {
  const ui = getUiContent(locale);
  const categoryLabel = ui.projects.category[project.category];
  const statusLabel = ui.projects.status[project.status];
  const showsDistinctStatus = categoryLabel !== statusLabel;

  return (
    <article className="max-w-3xl">
      <Link className="text-sm font-medium text-muted underline" href={getLocalePath(locale, "projects")}>{ui.projects.backToProjects}</Link>
      <div className="mt-8 flex flex-wrap gap-x-3 gap-y-1 text-sm font-medium text-accent">
        <span>{categoryLabel}</span>
        {showsDistinctStatus && <><span aria-hidden="true">·</span><span>{statusLabel}</span></>}
        <span aria-hidden="true">·</span><span>{project.year}</span>
      </div>
      <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">{project.content.title[locale]}</h1>
      <p className="mt-6 text-xl leading-8 text-muted">{project.content.summary[locale]}</p>
      <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 font-medium">
        {project.repositoryUrl && (
          <a className="inline-flex items-center gap-2 underline" href={project.repositoryUrl} rel="noreferrer" target="_blank">
            <GitHubIcon />
            {ui.projects.repository}
          </a>
        )}
        {project.demoUrl && (
          <a className="inline-flex items-center gap-2 underline" href={project.demoUrl} rel="noreferrer" target="_blank">
            <WebsiteIcon />
            {ui.projects.liveDemo}
          </a>
        )}
      </div>
      <section className="mt-12 border-y border-line py-6" aria-labelledby="technologies-heading">
        <h2 className="section-heading" id="technologies-heading">{ui.projects.technologies}</h2>
        <ul className="flex flex-wrap gap-2">{project.technologies.map((technology) => <li className="border border-line px-2 py-1 text-sm" key={technology}>{technology}</li>)}</ul>
      </section>
      <div className="mt-12 space-y-12">
        {project.content.sections.map((section) => (
          <section key={section.heading.en}>
            <h2 className="section-heading">{section.heading[locale]}</h2>
            <div className="space-y-5 text-lg leading-8 text-muted">{section.paragraphs.map((paragraph) => <p key={paragraph.en}>{paragraph[locale]}</p>)}</div>
            {section.items && <ul className="mt-5 list-disc space-y-2 pl-5 text-muted">{section.items.map((item) => <li key={item.en}>{item[locale]}</li>)}</ul>}
          </section>
        ))}
      </div>
    </article>
  );
}
