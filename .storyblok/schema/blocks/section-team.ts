import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const sectionTeamBlock = defineBlock({
  name: 'section_team',
  display_name: 'Team Section',
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
    defineField('people', {
      allow_advanced_search: true,
      entry_appearance: 'card',
      filter_content_type: [
        'person',
      ],
      is_reference_type: true,
      min_options: 1,
      minimum: 1,
      restrict_components: true,
      restrict_type: '',
      source: 'internal_stories',
      type: 'options',
    }),
    defineField('show_bios', {
      type: 'boolean',
    }),
    defineField('theme', {
      datasource: 'theme',
      source: 'internal',
      type: 'option',
      use_uuid: true,
    }),
  ],
});
