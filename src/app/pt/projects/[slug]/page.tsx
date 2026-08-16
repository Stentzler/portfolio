import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectCaseStudy } from "@/components/projects/project-case-study";
import { StructuredData } from "@/components/ui/structured-data";
import { getProjectBySlug, getPublishedProjects } from "@/lib/content/projects";
import { createPageMetadata } from "@/lib/seo/metadata";
import { createProjectStructuredData } from "@/lib/seo/structured-data";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getPublishedProjects()).map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug((await params).slug);
  if (!project) return {};

  return createPageMetadata({
    locale: "pt-BR",
    path: `projects/${project.slug}`,
    title: `${project.content.title["pt-BR"]} | Vinicius Stentzler`,
    description: project.content.summary["pt-BR"],
  });
}

export default async function PortugueseProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectBySlug((await params).slug);
  if (!project) notFound();

  return (
    <>
      <StructuredData data={createProjectStructuredData(project, "pt-BR")} />
      <ProjectCaseStudy locale="pt-BR" project={project} />
    </>
  );
}
