import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const pageBlock = defineBlock({
  name: 'page',
  display_name: 'Page',
  is_root: true,
  is_nestable: false,
  internal_tag_ids: [
    '216527726665305',
  ],
  fields: [
    defineField('internal_name', {
      type: 'text',
    }),
    defineField('title', {
      type: 'text',
    }),
    defineField('body', {
      type: 'bloks',
    }),
    defineField('seo', {
      allow: [
        'utility_seo',
      ],
      type: 'bloks',
    }),
    defineField('hide_from_navigation', {
      type: 'boolean',
    }),
  ],
});
