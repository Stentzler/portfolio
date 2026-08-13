import { getUiContent } from "@/lib/content/ui";

export default function NotFound() {
  return <main><h1>{getUiContent("en").content.notFound}</h1></main>;
}
