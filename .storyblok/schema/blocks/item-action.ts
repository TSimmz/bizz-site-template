import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const itemActionBlock = defineBlock({
  name: 'item_action',
  display_name: 'Action',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527800835675',
  ],
  fields: [
    defineField('label', {
      max_length: 50,
      required: true,
      type: 'text',
    }),
    defineField('link', {
      required: true,
      type: 'multilink',
      allow_target_blank: true
    }),
    defineField('style', {
      default_value: 'primary',
      required: true,
      type: 'option',
      options: [
        {
          _uid: '5c746958-a9da-41b6-b46d-8542841cc789',
          name: 'Primary',
          value: 'primary',
        },
        {
          _uid: '94ed20e6-969d-4e1f-be88-3cee9c35c7a2',
          name: 'Secondary',
          value: 'secondary',
        },
        {
          _uid: '9d81e3fc-33d3-4d44-b614-aa4efb0faef3',
          name: 'Outline',
          value: 'outline',
        },
        {
          _uid: 'd8bddaec-3dc5-4751-83e0-2be4ac14f2b4',
          name: 'Ghost',
          value: 'ghost',
        },
        {
          _uid: '173e97b9-f0b6-4cf5-b585-392a69819bfa',
          name: 'Text',
          value: 'text',
        },
      ],
    }),
  ],
});
