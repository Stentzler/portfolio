import { ContentPending } from "@/components/layout/content-pending";
import { getUiContent } from "@/lib/content/ui";

export default function PortugueseHomePage() {
  const ui = getUiContent("pt-BR");
  return <ContentPending message={ui.content.preparing} />;
}
