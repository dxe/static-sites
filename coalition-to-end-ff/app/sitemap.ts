import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE_URL = "https://endfactoryfarming.vote";

const routes = [
  "/",
  "/blog",
  "/blog/more-info",
  "/cafo-flow-chart",
  "/cafos",
  "/calendar",
  "/community-support-for-measure-j-1",
  "/debate",
  "/disclosure",
  "/donate",
  "/economic-guide",
  "/faq",
  "/faq-measure-j-2024",
  "/form",
  "/home",
  "/how",
  "/impact-report",
  "/losing-forward-in-the-fight-to-end-factory-farming",
  "/measure-text",
  "/new-homepage-proposal",
  "/news",
  "/newsletter",
  "/sunrise",
  "/topfunders",
  "/videos",
  "/volunteer",
  "/what-are-cafos",
  "/what-are-cafos-1",
  "/why-measure-j",
  "/yard-sign",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
  }));
}
