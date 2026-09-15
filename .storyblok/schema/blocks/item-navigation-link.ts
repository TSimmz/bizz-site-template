import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const itemNavigationLinkBlock = defineBlock({
  name: 'item_navigation_link',
  display_name: 'Navigation Link',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527800835675',
  ],
  fields: [
    defineField('label', {
      required: true,
      type: 'text',
    }),
    defineField('link', {
      required: true,
      type: 'multilink',
    }),
    defineField('open_in_new_tab', {
      type: 'boolean',
    }),
  ],
});
