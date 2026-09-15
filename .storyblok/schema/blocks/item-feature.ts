import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const itemFeatureBlock = defineBlock({
  name: 'item_feature',
  display_name: 'Feature',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527800835675',
  ],
  fields: [
    defineField('icon', {
      filetypes: [
        'images',
      ],
      type: 'asset',
    }),
    defineField('heading', {
      required: true,
      type: 'text',
    }),
    defineField('body', {
      type: 'textarea',
    }),
    defineField('link', {
      type: 'multilink',
    }),
  ],
});
