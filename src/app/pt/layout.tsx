import "@/app/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteLayout } from "@/components/layout/site-layout";
import { getUiContent } from "@/lib/content/ui";

const ui = getUiContent("pt-BR");

export const metadata: Metadata = {
  title: ui.metadata.title,
  description: ui.metadata.description,
};

export default function PortugueseLayout({ children }: { children: ReactNode }) {
  return <SiteLayout locale="pt-BR">{children}</SiteLayout>;
}
