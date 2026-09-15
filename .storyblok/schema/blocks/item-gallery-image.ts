import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const itemGalleryImageBlock = defineBlock({
  name: 'item_gallery_image',
  display_name: 'Gallery Image',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527800835675',
  ],
  fields: [
    defineField('internal_name', {
      type: 'text',
    }),
    defineField('image', {
      filetypes: [
        'images',
      ],
      required: true,
      type: 'asset',
    }),
    defineField('caption', {
      type: 'textarea',
    }),
    defineField('credit', {
      type: 'text',
    }),
    defineField('link', {
      type: 'multilink',
    }),
  ],
});
