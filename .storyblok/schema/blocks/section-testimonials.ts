import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const sectionTestimonialsBlock = defineBlock({
  name: 'section_testimonials',
  display_name: 'Testimonials Section',
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
    defineField('testimonials', {
      allow: [
        'item_testimonial',
      ],
      type: 'bloks',
    }),
    defineField('theme', {
      datasource: 'theme',
      source: 'internal',
      type: 'option',
      use_uuid: true,
    }),
  ],
});
