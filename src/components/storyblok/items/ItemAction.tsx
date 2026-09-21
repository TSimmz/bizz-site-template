import Link from "next/link";
import { storyblokEditable } from "@storyblok/react/rsc";

import { Button } from "@/components/ui/button";
import { resolveStoryblokLink } from "@/lib/storyblok/resolve-link";

import type { ItemActionType } from "@/lib/storyblok/types";
import { StoryblokMultilink } from "../../../../.storyblok/types/storyblok";

type ItemActionProps = {
  blok: ItemActionType
};

type ItemActionStyle = ItemActionType['style']
type Label = ItemActionType['label'];
type Link = ItemActionType['link'];
type Style = ItemActionType['style'];

const actionVariantMap = {
  primary: "default",
  secondary: "secondary",
  outline: "outline",
  ghost: "ghost",
  text: "link",
} as const;

export function ItemAction({ blok }: ItemActionProps) {
  const { href, external, target } = resolveStoryblokLink(blok.link);

  const variant = actionVariantMap[blok.style ?? "primary"];

  const linkProps =
    target === "_blank"
      ? {
          target: "_blank" as const,
          rel: "noopener noreferrer",
        }
      : {};

  return (
    <span {...storyblokEditable(blok)}>
      <Button asChild variant={variant}>
        {external ? (
          <a href={href} {...linkProps}>
            {blok.label}
          </a>
        ) : (
          <Link href={href} {...linkProps}>
            {blok.label}
          </Link>
        )}
      </Button>
    </span>
  );
}