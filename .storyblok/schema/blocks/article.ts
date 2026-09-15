import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const articleBlock = defineBlock({
  name: 'article',
  display_name: 'Article',
  is_root: true,
  is_nestable: false,
  description: '',
  internal_tag_ids: [
    '216527726665305',
  ],
  fields: [
    defineField('title', {
      type: 'text',
    }),
    defineField('slug', {
      type: 'text',
    }),
    defineField('excert', {
      type: 'text',
    }),
    defineField('featured_image', {
      filetypes: [
        'images',
      ],
      tooltip: true,
      type: 'asset',
    }),
    defineField('published_at', {
      type: 'datetime',
    }),
    defineField('body', {
      type: 'richtext',
    }),
    defineField('author', {
      allow_advanced_search: true,
      entry_appearance: 'card',
      filter_content_type: [
        'person',
      ],
      is_reference_type: true,
      max_options: 1,
      source: 'internal_stories',
      type: 'options',
    }),
    defineField('seo', {
      allow: [
        'utility_seo',
      ],
      type: 'bloks',
    }),
  ],
});
