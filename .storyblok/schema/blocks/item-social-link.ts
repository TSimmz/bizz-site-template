import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const itemSocialLinkBlock = defineBlock({
  name: 'item_social_link',
  display_name: 'Social Link',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527800835675',
  ],
  fields: [
    defineField('platform', {
      datasource: 'social-platforms',
      required: true,
      source: 'internal',
      type: 'option',
      use_uuid: true,
    }),
    defineField('label', {
      required: true,
      type: 'text',
    }),
    defineField('link', {
      required: true,
      type: 'multilink',
    }),
  ],
});
