import { ContentPending } from "@/components/layout/content-pending";
import { getUiContent } from "@/lib/content/ui";

export default function EnglishHomePage() {
  const ui = getUiContent("en");
  return <ContentPending message={ui.content.preparing} />;
}
