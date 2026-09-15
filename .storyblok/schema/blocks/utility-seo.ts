import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const utilitySeoBlock = defineBlock({
  name: 'utility_seo',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527904448095',
  ],
  fields: [
    defineField('title', {
      max_length: 60,
      type: 'text',
    }),
    defineField('description', {
      max_length: 200,
      type: 'text',
    }),
    defineField('social_title', {
      type: 'text',
    }),
    defineField('social_image', {
      filetypes: [
        'images',
      ],
      type: 'asset',
    }),
    defineField('canonical_url', {
      type: 'text',
    }),
  ],
});
