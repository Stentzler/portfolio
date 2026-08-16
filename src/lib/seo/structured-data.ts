import type { Locale } from "@/lib/i18n/locales";
import type { Profile, Project } from "@/lib/validation/schemas";
import { getLocalizedUrl } from "@/lib/seo/site";

type StructuredData = Record<string, unknown>;

export function createPersonStructuredData(profile: Profile, locale: Locale): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: getLocalizedUrl(locale),
    jobTitle: profile.role[locale],
    description: profile.hero[locale],
    knowsAbout: profile.capabilities.map((capability) => capability[locale]),
    sameAs: profile.contactLinks
      .map((link) => link.url[locale])
      .filter((url) => !url.startsWith("mailto:")),
  };
}

export function createProjectStructuredData(project: Project, locale: Locale): StructuredData {
  const path = `projects/${project.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.content.title[locale],
    description: project.content.summary[locale],
    url: getLocalizedUrl(locale, path),
    inLanguage: locale,
    creator: {
      "@type": "Person",
      name: "Vinicius Stentzler",
      url: getLocalizedUrl(locale),
    },
    keywords: project.technologies,
    sameAs: [project.repositoryUrl, project.demoUrl].filter(
      (url): url is string => Boolean(url),
    ),
  };
}
