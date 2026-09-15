import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const sectionStatsBlock = defineBlock({
  name: 'section_stats',
  display_name: 'Stats Section',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527772470874',
  ],
  fields: [
    defineField('heading', {
      max_length: 100,
      required: true,
      type: 'text',
    }),
    defineField('body', {
      type: 'textarea',
    }),
    defineField('stats', {
      allow: [
        'item_stat',
      ],
      minimum: 1,
      type: 'bloks',
    }),
    defineField('theme', {
      datasource: 'theme',
      source: 'internal',
      type: 'option',
      use_uuid: true,
    }),
  ],
});
