import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const itemProcessStepBlock = defineBlock({
  name: 'item_process_step',
  display_name: 'Process Step',
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
    defineField('eyebrow', {
      type: 'text',
    }),
    defineField('heading', {
      required: true,
      type: 'text',
    }),
    defineField('body', {
      type: 'textarea',
    }),
    defineField('media', {
      filetypes: [
        'images',
      ],
      type: 'asset',
    }),
    defineField('action', {
      allow: [
        'item_action',
      ],
      maximum: 1,
      minimum: 0,
      type: 'bloks',
    }),
  ],
});
