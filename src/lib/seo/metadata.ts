import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/locales";
import { getLocalizedUrl } from "@/lib/seo/site";

type PageMetadataInput = {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
};

const localeMetadata = {
  en: { openGraph: "en_US", alternate: "pt_BR" },
  "pt-BR": { openGraph: "pt_BR", alternate: "en_US" },
} as const;

export function createPageMetadata({
  locale,
  path = "",
  title,
  description,
}: PageMetadataInput): Metadata {
  const localizedUrl = getLocalizedUrl(locale, path);

  return {
    title,
    description,
    alternates: {
      canonical: localizedUrl,
      languages: {
        en: getLocalizedUrl("en", path),
        "pt-BR": getLocalizedUrl("pt-BR", path),
        "x-default": getLocalizedUrl("en", path),
      },
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: localizedUrl,
      siteName: "Vinicius Stentzler",
      locale: localeMetadata[locale].openGraph,
      alternateLocale: localeMetadata[locale].alternate,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
