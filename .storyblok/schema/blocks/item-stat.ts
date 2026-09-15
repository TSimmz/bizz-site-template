import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const itemStatBlock = defineBlock({
  name: 'item_stat',
  display_name: 'Stat',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527800835675',
  ],
  fields: [
    defineField('prefix', {
      type: 'text',
    }),
    defineField('value', {
      required: true,
      type: 'text',
    }),
    defineField('suffix', {
      type: 'text',
    }),
    defineField('label', {
      required: true,
      type: 'text',
    }),
    defineField('description', {
      type: 'textarea',
    }),
  ],
});
