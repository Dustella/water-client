import { ManifestOptions } from "vite-plugin-pwa";

const pwaManifest: Partial<ManifestOptions> = {
  name: "Water",
  short_name: "Water",
  description: "Third Party Client for Water",
  theme_color: "#ffffff",
};

export default pwaManifest;
