import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const itemLogoBlock = defineBlock({
  name: 'item_logo',
  display_name: 'Logo',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527800835675',
  ],
  fields: [
    defineField('name', {
      required: true,
      type: 'text',
    }),
    defineField('image', {
      filetypes: [
        'images',
      ],
      required: true,
      type: 'asset',
    }),
    defineField('link', {
      required: false,
      type: 'multilink',
    }),
  ],
});
