import uiJson from "@/data/ui.json";
import { type UiContent, uiSchema } from "@/lib/validation/schemas";

const uiContent: UiContent = uiSchema.parse(uiJson);

export function getUiContent(locale: "en" | "pt-BR") {
  return uiContent[locale];
}
