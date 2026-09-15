import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const itemTimelineEventBlock = defineBlock({
  name: 'item_timeline_event',
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
    defineField('date', {
      type: 'datetime',
    }),
    defineField('date_label', {
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
    defineField('link', {
      type: 'multilink',
    }),
  ],
});
