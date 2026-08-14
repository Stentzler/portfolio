import { ProjectCard } from "@/components/projects/project-card";
import { getPublishedProjects } from "@/lib/content/projects";

export default async function PortugueseProjectsPage() {
  const projects = await getPublishedProjects();
  return <div className="grid gap-6 lg:grid-cols-2">{projects.map((project) => <ProjectCard locale="pt-BR" project={project} key={project.slug} />)}</div>;
}
