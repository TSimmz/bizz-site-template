import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const personBlock = defineBlock({
  name: 'person',
  display_name: 'Person',
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
    defineField('headshot', {
      filetypes: [
        'images',
      ],
      tooltip: true,
      type: 'asset',
    }),
    defineField('short_bio', {
      type: 'text',
    }),
    defineField('full_bio', {
      type: 'textarea',
    }),
    defineField('email', {
      type: 'text',
    }),
    defineField('phone', {
      type: 'text',
    }),
    defineField('social_links', {
      allow: [
        'item_social_link',
      ],
      type: 'bloks',
    }),
  ],
});
