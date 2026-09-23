import Link from "next/link";
import {
  storyblokEditable,
} from "@storyblok/react/rsc";

import type {
  VariantProps,
} from "class-variance-authority";

import {
  Button,
  buttonVariants,
} from "@/components/ui/button";

import {
  resolveStoryblokLink,
} from "@/lib/storyblok/resolve-link";

import type {
  Block,
} from "../../../../.storyblok/schema/schema";

import type {
  ItemActionStyle,
} from "../../../../.storyblok/schema/options/item-action-style";

type ItemActionType =
  Block<"item_action">;

type ItemActionProps = {
  blok: ItemActionType;
};

type ButtonVariant =
  NonNullable<
    VariantProps<
      typeof buttonVariants
    >["variant"]
  >;

const actionVariantMap = {
  primary: "default",
  secondary: "secondary",
  outline: "outline",
  ghost: "ghost",
  text: "link",
} satisfies Record<
  ItemActionStyle,
  ButtonVariant
>;

const isItemActionStyle = (
  value: string,
): value is ItemActionStyle => {
  return Object.prototype.hasOwnProperty.call(
    actionVariantMap,
    value,
  );
}

export const ItemAction = ({
  blok,
}: ItemActionProps) => {
  const {
    href,
    external,
    target,
  } = resolveStoryblokLink(blok.link);

  const style = isItemActionStyle(blok.style)
    ? blok.style
    : "primary";

  const variant = actionVariantMap[style];

  const targetProps =
    target === "_blank"
      ? {
          target: "_blank" as const,
          rel: "noopener noreferrer",
        }
      : {};

  return (
    <span {...storyblokEditable(blok)}>
      <Button
        asChild
        variant={variant}
      >
        {external ? (
          <a href={href} {...targetProps}>
            {blok.label}
          </a>
        ) : (
          <Link href={href} {...targetProps}>
            {blok.label}
          </Link>
        )}
      </Button>
    </span>
  );
}