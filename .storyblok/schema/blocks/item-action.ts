import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

import { itemActionStyleOptions } from '../options/item-action-style'

export const itemActionBlock = defineBlock({
  name: 'item_action',
  display_name: 'Action',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527800835675',
  ],
  fields: [
    defineField('label', {
      max_length: 50,
      required: true,
      type: 'text',
    }),
    defineField('link', {
      required: true,
      type: 'multilink',
      allow_target_blank: true
    }),
    defineField("style", {
      type: "option",
      required: true,
      default_value: "primary",
      options: [ 
        ...itemActionStyleOptions
      ],
    }),
  ],
});
