import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const globalSocialLinksBlock = defineBlock({
  name: 'global_social_links',
  display_name: 'Global Social Links',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527848693341',
  ],
  fields: [
    defineField('items', {
      allow: [
        'item_social_link',
      ],
      type: 'bloks',
    }),
  ],
});
