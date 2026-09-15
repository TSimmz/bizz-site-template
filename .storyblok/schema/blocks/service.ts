import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const serviceBlock = defineBlock({
  name: 'service',
  display_name: 'Service',
  is_root: true,
  is_nestable: false,
  description: '',
  internal_tag_ids: [
    '216527726665305',
  ],
  fields: [
    defineField('name', {
      type: 'text',
    }),
    defineField('description', {
      type: 'textarea',
    }),
    defineField('icon', {
      filetypes: [
        'images',
      ],
      tooltip: true,
      type: 'asset',
    }),
    defineField('featured_image', {
      allow_external_url: false,
      filetypes: [
        'images',
      ],
      tooltip: true,
      type: 'asset',
    }),
    defineField('body', {
      type: 'richtext',
    }),
    defineField('seo', {
      allow: [
        'utility_seo',
      ],
      type: 'bloks',
    }),
  ],
});
