import type { Metadata } from "next";
import { ProjectCollection } from "@/components/projects/project-collection";
import { getPublishedProjects } from "@/lib/content/projects";
import { getUiContent } from "@/lib/content/ui";
import { createPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const ui = getUiContent("pt-BR");

  return createPageMetadata({
    locale: "pt-BR",
    path: "projects",
    title: ui.metadata.projects.title,
    description: ui.metadata.projects.description,
  });
}

export default async function PortugueseProjectsPage() {
  const projects = await getPublishedProjects();
  return <ProjectCollection locale="pt-BR" projects={projects} />;
}
