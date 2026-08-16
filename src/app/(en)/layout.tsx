import "@/app/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/layout/site-layout";
import { getUiContent } from "@/lib/content/ui";
import { createPageMetadata } from "@/lib/seo/metadata";

const ui = getUiContent("en");

export const metadata: Metadata = createPageMetadata({
  locale: "en",
  title: ui.metadata.title,
  description: ui.metadata.description,
});

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteLayout locale="en">{children}</SiteLayout>;
}
