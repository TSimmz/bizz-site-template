import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const sectionProcessBlock = defineBlock({
  name: 'section_process',
  display_name: 'Process Section',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527772470874',
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
    defineField('steps', {
      allow: [
        'item_process_step',
      ],
      maximum: 10,
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
