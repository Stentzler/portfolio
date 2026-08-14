import profileJson from "@/data/profile.json";
import { type Profile, profileSchema } from "@/lib/validation/schemas";

const profile: Profile = profileSchema.parse(profileJson);

export function getProfile(): Profile {
  return profile;
}
