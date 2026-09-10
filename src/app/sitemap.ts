import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://weblings.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes: Array<{
    path: string;
    changeFrequency:
      | "always"
      | "hourly"
      | "daily"
      | "weekly"
      | "monthly"
      | "yearly"
      | "never";
    priority: number;
  }> = [
    // Primary Homepage
    { path: "", changeFrequency: "weekly", priority: 1.0 },

    // Core Product Hubs
    { path: "/mail", changeFrequency: "weekly", priority: 0.9 },
    { path: "/connect", changeFrequency: "weekly", priority: 0.9 },
    { path: "/calender", changeFrequency: "weekly", priority: 0.9 },
    { path: "/streamline", changeFrequency: "weekly", priority: 0.9 },
    { path: "/workSuite/feature", changeFrequency: "weekly", priority: 0.9 },
    { path: "/price", changeFrequency: "weekly", priority: 0.9 },

    // Features & Product Details
    { path: "/mail/feature", changeFrequency: "monthly", priority: 0.8 },
    { path: "/connect/feature", changeFrequency: "monthly", priority: 0.8 },
    { path: "/calender/feature", changeFrequency: "monthly", priority: 0.8 },
    { path: "/streamline/feature", changeFrequency: "monthly", priority: 0.8 },
    { path: "/eoffice/feature", changeFrequency: "monthly", priority: 0.8 },
    { path: "/drive", changeFrequency: "monthly", priority: 0.8 },

    // Company & Information
    { path: "/about", changeFrequency: "monthly", priority: 0.8 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.8 },

    // Comparison Pages
    { path: "/mail/comparison", changeFrequency: "monthly", priority: 0.7 },
    { path: "/connect/comparison", changeFrequency: "monthly", priority: 0.7 },
    { path: "/calender/comparison", changeFrequency: "monthly", priority: 0.7 },
    { path: "/streamline/comparison", changeFrequency: "monthly", priority: 0.7 },
    { path: "/eoffice/comparison", changeFrequency: "monthly", priority: 0.7 },
    { path: "/workSuite/comparison", changeFrequency: "monthly", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
