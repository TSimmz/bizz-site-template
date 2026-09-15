import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const navigationBlock = defineBlock({
  name: 'navigation',
  display_name: 'Navigation',
  is_root: true,
  is_nestable: false,
  description: '',
  internal_tag_ids: [
    '216527726665305',
  ],
  fields: [
    defineField('internal_name', {
      type: 'text',
    }),
    defineField('items', {
      allow: [
        'item_navigation_link',
      ],
      type: 'bloks',
    }),
  ],
});
