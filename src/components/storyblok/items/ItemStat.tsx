import { storyblokEditable } from "@storyblok/react/rsc"

import { type Block } from "../../../../.storyblok/schema/schema"

type ItemStatProps = {
  blok: Block<"item_stat">
}

export const ItemStat = ({ blok }: ItemStatProps) => {
  return (
    <div {...storyblokEditable(blok)}>
      <div className="text-4xl font-semibold tracking-tight">
        {blok.value}
      </div>

      <div className="mt-2 font-medium">
        {blok.label}
      </div>

      {blok.description && (
        <p className="mt-1 text-sm text-muted-foreground">
          {blok.description}
        </p>
      )}
    </div>
  )
}