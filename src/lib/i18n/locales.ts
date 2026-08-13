export const locales = ["en", "pt-BR"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getLocalePath(locale: Locale, path = ""): string {
  const normalizedPath = path.replace(/^\/+|\/+$/g, "");
  const prefix = locale === "pt-BR" ? "/pt" : "";

  return normalizedPath ? `${prefix}/${normalizedPath}` : `${prefix || "/"}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "en" ? "pt-BR" : "en";
}
