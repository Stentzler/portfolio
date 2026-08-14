"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n/locales";

type LanguageSwitcherProps = {
  targetLocale: Locale;
};

export function LanguageSwitcher({ targetLocale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const href = targetLocale === "pt-BR" ? `/pt${pathname === "/" ? "" : pathname}` : pathname.replace(/^\/pt(?=\/|$)/, "") || "/";

  return <Link href={href} hrefLang={targetLocale} lang={targetLocale}>{targetLocale === "en" ? "EN" : "PT"}</Link>;
}
