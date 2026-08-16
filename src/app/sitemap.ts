import type { MetadataRoute } from "next";
import { getPublishedProjects } from "@/lib/content/projects";
import { getLocalizedUrl } from "@/lib/seo/site";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getPublishedProjects();
  const routes = ["", "projects"];
  const projectRoutes = projects.map((project) => `projects/${project.slug}`);

  return [
    ...routes.flatMap((path) => [
      { url: getLocalizedUrl("en", path) },
      { url: getLocalizedUrl("pt-BR", path) },
    ]),
    ...projectRoutes.flatMap((path) => [
      { url: getLocalizedUrl("en", path) },
      { url: getLocalizedUrl("pt-BR", path) },
    ]),
  ];
}
