import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const sectionFaqBlock = defineBlock({
  name: 'section_faq',
  display_name: 'FAQ Section',
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
    defineField('items', {
      allow: [
        'item_feature',
        'item_faq',
      ],
      minimum: 1,
      type: 'bloks',
    }),
    defineField('allow_multiple_open', {
      type: 'boolean',
    }),
    defineField('theme', {
      datasource: 'theme',
      required: false,
      source: 'internal',
      type: 'option',
      use_uuid: true,
    }),
  ],
});
