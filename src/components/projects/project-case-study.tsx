import Link from "next/link";
import type { Project } from "@/lib/validation/schemas";
import { getUiContent } from "@/lib/content/ui";
import { getLocalePath, type Locale } from "@/lib/i18n/locales";

type ProjectCaseStudyProps = {
  locale: Locale;
  project: Project;
};

function GitHubIcon() {
  return (
    <svg aria-hidden="true" className="size-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.6-1.4-5.6-6a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.7-2.9 5.7-5.6 6 .4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A12 12 0 0 0 12 .3Z" />
    </svg>
  );
}

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
        {project.demoUrl && <a className="underline" href={project.demoUrl} rel="noreferrer" target="_blank">{project.demoUrl}</a>}
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
