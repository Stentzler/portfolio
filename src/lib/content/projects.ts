import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { type Project, projectSchema } from "@/lib/validation/schemas";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export async function getAllProjects(): Promise<Project[]> {
  const filenames = await readdir(projectsDirectory).catch((error: unknown) => {
    if (isMissingDirectory(error)) return [];
    throw error;
  });
  const projects = await Promise.all(
    filenames.filter((filename) => filename.endsWith(".json")).map(readProject),
  );

  assertUniqueSlugs(projects);
  return projects.sort((first, second) => first.displayOrder - second.displayOrder);
}

export async function getPublishedProjects(): Promise<Project[]> {
  return (await getAllProjects()).filter((project) => project.publicationState === "published");
}

export async function getProjectBySlug(slug: string): Promise<Project | undefined> {
  return (await getPublishedProjects()).find((project) => project.slug === slug);
}

async function readProject(filename: string): Promise<Project> {
  const filePath = path.join(projectsDirectory, filename);
  const source = await readFile(filePath, "utf8");
  return projectSchema.parse(JSON.parse(source));
}

function assertUniqueSlugs(projects: Project[]): void {
  const slugs = new Set<string>();
  for (const project of projects) {
    if (slugs.has(project.slug)) throw new Error(`Duplicate project slug: ${project.slug}`);
    slugs.add(project.slug);
  }
}

function isMissingDirectory(error: unknown): error is NodeJS.ErrnoException {
  return typeof error === "object" && error !== null && "code" in error && error.code === "ENOENT";
}
