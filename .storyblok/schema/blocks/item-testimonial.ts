import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const itemTestimonialBlock = defineBlock({
  name: 'item_testimonial',
  display_name: 'Testimonial',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527800835675',
  ],
  fields: [
    defineField('quote', {
      required: true,
      type: 'textarea',
    }),
    defineField('name', {
      required: true,
      type: 'text',
    }),
    defineField('role', {
      type: 'text',
    }),
    defineField('organization', {
      type: 'text',
    }),
    defineField('portrait', {
      filetypes: [
        'images',
      ],
      type: 'asset',
    }),
  ],
});
