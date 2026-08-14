import type { Project } from "@/lib/validation/schemas";
import { getUiContent } from "@/lib/content/ui";
import { type Locale } from "@/lib/i18n/locales";
import { ProjectCard } from "./project-card";

type ProjectCollectionProps = {
  locale: Locale;
  projects: Project[];
};

type ProjectGroupProps = {
  locale: Locale;
  projects: Project[];
  title: string;
};

function ProjectGroup({ locale, projects, title }: ProjectGroupProps) {
  if (projects.length === 0) return null;

  return (
    <section aria-labelledby={`${title}-heading`}>
      <h2 className="section-heading" id={`${title}-heading`}>{title}</h2>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {projects.map((project) => <ProjectCard locale={locale} project={project} key={project.slug} />)}
      </div>
    </section>
  );
}

export function ProjectCollection({ locale, projects }: ProjectCollectionProps) {
  const ui = getUiContent(locale);
  const regularProjects = projects.filter((project) => project.category !== "lab");
  const labs = projects.filter((project) => project.category === "lab");

  return (
    <div className="space-y-12">
      <h1 className="sr-only">{ui.navigation.projects}</h1>
      <ProjectGroup locale={locale} projects={regularProjects} title={ui.projects.sections.projects} />
      <ProjectGroup locale={locale} projects={labs} title={ui.projects.sections.labs} />
    </div>
  );
}
