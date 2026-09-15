import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const itemCardBlock = defineBlock({
  name: 'item_card',
  display_name: 'Card',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527800835675',
  ],
  fields: [
    defineField('eyebrow', {
      type: 'text',
    }),
    defineField('heading', {
      max_length: 100,
      required: true,
      type: 'text',
    }),
    defineField('body', {
      type: 'textarea',
    }),
    defineField('media', {
      filetypes: [
        'images',
      ],
      type: 'asset',
    }),
    defineField('action', {
      allow: [
        'item_action',
      ],
      maximum: 1,
      minimum: 0,
      type: 'bloks',
    }),
    defineField('featured', {
      default_value: false,
      type: 'boolean',
    }),
  ],
});
