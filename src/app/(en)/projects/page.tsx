import type { Metadata } from "next";
import { ProjectCollection } from "@/components/projects/project-collection";
import { getPublishedProjects } from "@/lib/content/projects";
import { getUiContent } from "@/lib/content/ui";
import { createPageMetadata } from "@/lib/seo/metadata";

export function generateMetadata(): Metadata {
  const ui = getUiContent("en");

  return createPageMetadata({
    locale: "en",
    path: "projects",
    title: ui.metadata.projects.title,
    description: ui.metadata.projects.description,
  });
}

export default async function EnglishProjectsPage() {
  const projects = await getPublishedProjects();
  return <ProjectCollection locale="en" projects={projects} />;
}
