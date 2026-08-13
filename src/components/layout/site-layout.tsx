import Link from "next/link";
import type { ReactNode } from "react";
import { getUiContent } from "@/lib/content/ui";
import { getAlternateLocale, getLocalePath, type Locale } from "@/lib/i18n/locales";

type SiteLayoutProps = {
  children: ReactNode;
  locale: Locale;
};

export function SiteLayout({ children, locale }: SiteLayoutProps) {
  const ui = getUiContent(locale);
  const alternateLocale = getAlternateLocale(locale);

  return (
    <html lang={locale}>
      <body className="bg-canvas font-sans text-ink antialiased">
        <a className="skip-link" href="#main-content">{ui.content.skipToContent}</a>
        <header className="border-b border-line">
          <nav aria-label={ui.navigation.home} className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
            <Link className="font-semibold tracking-tight" href={getLocalePath(locale)}>{ui.metadata.title}</Link>
            <div className="flex items-center gap-4 text-sm font-medium">
              <Link href={getLocalePath(locale, "projects")}>{ui.navigation.projects}</Link>
              <Link href={getLocalePath(alternateLocale)} hrefLang={alternateLocale} lang={alternateLocale}>
                {alternateLocale === "en" ? "EN" : "PT"}
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto min-h-[calc(100vh-9rem)] max-w-6xl px-5 py-16" id="main-content">{children}</main>
        <footer className="border-t border-line">
          <div className="mx-auto max-w-6xl px-5 py-6 text-sm text-muted">© {new Date().getFullYear()} {ui.footer.copyright}</div>
        </footer>
      </body>
    </html>
  );
}
