import Link from "next/link";
import type { ReactNode } from "react";
import { getUiContent } from "@/lib/content/ui";
import { getProfile } from "@/lib/content/profile";
import { getAlternateLocale, getLocalePath, type Locale } from "@/lib/i18n/locales";

type SiteLayoutProps = {
  children: ReactNode;
  locale: Locale;
};

export function SiteLayout({ children, locale }: SiteLayoutProps) {
  const ui = getUiContent(locale);
  const profile = getProfile();
  const alternateLocale = getAlternateLocale(locale);

  return (
    <html lang={locale}>
      <body className="bg-canvas font-sans text-ink antialiased">
        <a className="skip-link" href="#main-content">{ui.content.skipToContent}</a>
        <header className="border-b border-line">
          <nav aria-label={ui.navigation.home} className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
            <Link className="font-semibold tracking-tight" href={getLocalePath(locale)}>{profile.name}</Link>
            <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-medium">
              <Link href={`${getLocalePath(locale)}#bio`}>{ui.navigation.bio}</Link>
              <Link href={getLocalePath(locale, "projects")}>{ui.navigation.projects}</Link>
              <Link href={`${getLocalePath(locale)}#contact`}>{ui.navigation.contact}</Link>
              <Link href={getLocalePath(alternateLocale)} hrefLang={alternateLocale} lang={alternateLocale}>
                {alternateLocale === "en" ? "EN" : "PT"}
              </Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto min-h-[calc(100vh-9rem)] max-w-6xl px-5 pt-16" id="main-content">{children}</main>
        <footer className="sticky bottom-0 z-20 border-t border-line bg-canvas/95 backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {profile.name}. {ui.footer.copyright}</p>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 font-medium">
              {profile.contactLinks.map((link) => {
                const url = link.url[locale];
                const isEmailLink = url.startsWith("mailto:");

                return <li key={link.label.en}><a href={url} rel={isEmailLink ? undefined : "noreferrer"} target={isEmailLink ? undefined : "_blank"}>{link.label[locale]}</a></li>;
              })}
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
