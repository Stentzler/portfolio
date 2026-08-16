import type { Locale } from "@/lib/i18n/locales";
import { getLocalePath } from "@/lib/i18n/locales";

const siteOrigin = "https://www.stentzler.com.br";

export function getAbsoluteUrl(path = "/"): string {
  return new URL(path, siteOrigin).toString();
}

export function getLocalizedUrl(locale: Locale, path = ""): string {
  return getAbsoluteUrl(getLocalePath(locale, path));
}
