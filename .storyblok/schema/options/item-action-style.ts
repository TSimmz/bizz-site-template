export const itemActionStyleOptions = [
  {
    name: "Primary",
    value: "primary",
  },
  {
    name: "Secondary",
    value: "secondary",
  },
  {
    name: "Outline",
    value: "outline",
  },
  {
    name: "Ghost",
    value: "ghost",
  },
  {
    name: "Text",
    value: "text",
  },
] as const;

export type ItemActionStyle =
  (typeof itemActionStyleOptions)[number]["value"];