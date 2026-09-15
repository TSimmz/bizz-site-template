import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const sectionGalleryBlock = defineBlock({
  name: 'section_gallery',
  display_name: 'Gallery Section',
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
    defineField('images', {
      allow: [
        'item_gallery_image',
      ],
      minimum: 1,
      type: 'bloks',
    }),
    defineField('allow_lightbox', {
      type: 'boolean',
    }),
    defineField('theme', {
      datasource: 'theme',
      source: 'internal',
      type: 'option',
      use_uuid: true,
    }),
  ],
});
