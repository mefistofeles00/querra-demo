import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/data";

const base = "https://querra-demo.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, priority: 1 },
    { url: `${base}/dashboard`, priority: 0.6 },
    ...caseStudies.map((c) => ({ url: `${base}/case-studies/${c.slug}`, priority: 0.8 })),
  ];
}
