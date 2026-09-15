import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const sectionFeatureListBlock = defineBlock({
  name: 'section_feature_list',
  display_name: 'Feature List Section',
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
      max_length: 120,
      required: true,
      type: 'text',
    }),
    defineField('body', {
      type: 'textarea',
    }),
    defineField('features', {
      allow: [
        'item_feature',
      ],
      maximum: 4,
      minimum: 1,
      type: 'bloks',
    }),
    defineField('columns', {
      decimals: 0,
      max_value: 3,
      min_value: 1,
      steps: 1,
      type: 'number',
    }),
    defineField('theme', {
      datasource: 'theme',
      source: 'internal',
      type: 'option',
      use_uuid: true,
    }),
  ],
});
