import { ProjectCollection } from "@/components/projects/project-collection";
import { getPublishedProjects } from "@/lib/content/projects";

export default async function PortugueseProjectsPage() {
  const projects = await getPublishedProjects();
  return <ProjectCollection locale="pt-BR" projects={projects} />;
}
