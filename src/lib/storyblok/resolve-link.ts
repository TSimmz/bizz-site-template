// src/lib/storyblok/resolve-link.ts

import type { StoryblokMultilink } from "../../../.storyblok/types/storyblok";

export type ResolvedStoryblokLink = {
  href: string;
  external: boolean;
  target?: "_self" | "_blank";
};

export const resolveStoryblokLink = (
  link: StoryblokMultilink
): ResolvedStoryblokLink => {
  const target =
    link.target === "_blank" ? "_blank" : undefined;

  if (link.linktype === "story") {
    const slug = link.cached_url?.replace(/^\/+/, "") ?? "";

    return {
      href: slug === "home" ? "/" : `/${slug}`,
      external: false,
      target,
    };
  }

  return {
    href: link.url || link.cached_url || "#",
    external: true,
    target,
  };
};