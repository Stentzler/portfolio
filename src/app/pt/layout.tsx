import "@/app/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/layout/site-layout";
import { getUiContent } from "@/lib/content/ui";
import { createPageMetadata } from "@/lib/seo/metadata";

const ui = getUiContent("pt-BR");

export const metadata: Metadata = createPageMetadata({
  locale: "pt-BR",
  title: ui.metadata.title,
  description: ui.metadata.description,
});

export default function PortugueseLayout({ children }: { children: ReactNode }) {
  return <SiteLayout locale="pt-BR">{children}</SiteLayout>;
}
