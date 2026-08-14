import { getAllProjects } from "@/lib/content/projects";
import { getProfile } from "@/lib/content/profile";
import { getUiContent } from "@/lib/content/ui";
import { locales } from "@/lib/i18n/locales";

async function validateContent(): Promise<void> {
  for (const locale of locales) getUiContent(locale);
  getProfile();
  await getAllProjects();
  console.info("Content validation passed.");
}

validateContent().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
