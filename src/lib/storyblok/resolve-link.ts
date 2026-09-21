// src/lib/storyblok/resolve-link.ts

import { MultilinkFieldValue } from "@storyblok/schema";

export type ResolvedStoryblokLink = {
  href: string;
  external: boolean;
  target?: "_blank";
};

export const resolveStoryblokLink = (
  link: MultilinkFieldValue,
): ResolvedStoryblokLink => {
  const target = link.target === "_blank" ? "_blank" : undefined;

  if (link.linktype === "story") {
    const slug = link.cached_url?.replace(/^\/+/, "") ?? "";

    return {
      href: slug === "home" ? "/" : `/${slug}`,
      external: false,
      target,
    };
  }

  if (link.linktype === "email") {
    return {
      href: `mailto:${link.email}`,
      external: true,
      target,
    };
  }

  return {
    href: link.url || link.cached_url || "#",
    external: true,
    target,
  };
};