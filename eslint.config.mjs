import { FlatCompat } from "@eslint/eslintrc";
import { globalIgnores } from "eslint/config";

const compatibility = new FlatCompat({ baseDirectory: import.meta.dirname });

const config = [
  ...compatibility.extends("next/core-web-vitals", "next/typescript"),
  globalIgnores([".next/**", "out/**", "node_modules/**"]),
];

export default config;
