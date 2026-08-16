import { StructuredData } from "@/components/ui/structured-data";
import { HomePage } from "@/components/sections/home-page";
import { getProfile } from "@/lib/content/profile";
import { createPersonStructuredData } from "@/lib/seo/structured-data";

export default function EnglishHomePage() {
  return (
    <>
      <StructuredData data={createPersonStructuredData(getProfile(), "en")} />
      <HomePage locale="en" />
    </>
  );
}
