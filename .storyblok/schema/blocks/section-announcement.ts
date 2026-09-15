import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const sectionAnnouncementBlock = defineBlock({
  name: 'section_announcement',
  display_name: 'Announcement Section',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527772470874',
  ],
  fields: [
    defineField('message', {
      max_length: 120,
      required: true,
      type: 'text',
    }),
    defineField('action', {
      allow: [
        'item_action',
      ],
      maximum: 1,
      minimum: 0,
      type: 'bloks',
    }),
    defineField('dismissible', {
      type: 'boolean',
    }),
    defineField('theme', {
      datasource: 'theme',
      default_value: 'dark',
      source: 'internal',
      type: 'option',
      use_uuid: true,
    }),
  ],
});
