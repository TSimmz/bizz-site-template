import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const itemFaqBlock = defineBlock({
  name: 'item_faq',
  display_name: 'FAQ',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527800835675',
  ],
  fields: [
    defineField('question', {
      required: true,
      type: 'text',
    }),
    defineField('answer', {
      required: true,
      type: 'richtext',
    }),
  ],
});
