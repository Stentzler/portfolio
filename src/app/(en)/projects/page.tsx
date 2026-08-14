import { ProjectCollection } from "@/components/projects/project-collection";
import { getPublishedProjects } from "@/lib/content/projects";

export default async function EnglishProjectsPage() {
  const projects = await getPublishedProjects();
  return <ProjectCollection locale="en" projects={projects} />;
}
