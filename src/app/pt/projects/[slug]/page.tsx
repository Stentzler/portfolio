import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { getProjectBySlug, getPublishedProjects } from "@/lib/content/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getPublishedProjects()).map(({ slug }) => ({ slug }));
}

export default async function PortugueseProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug((await params).slug);
  if (!project) notFound();
  return <ProjectCaseStudy locale="pt-BR" project={project} />;
}
