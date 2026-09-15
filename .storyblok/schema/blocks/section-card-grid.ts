import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const sectionCardGridBlock = defineBlock({
  name: 'section_card_grid',
  display_name: 'Card Grid Section',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527772470874',
  ],
  fields: [
    defineField('eyebrow', {
      type: 'text',
    }),
    defineField('heading', {
      max_length: 100,
      required: true,
      type: 'text',
    }),
    defineField('body', {
      type: 'textarea',
    }),
    defineField('cards', {
      allow: [
        'item_card',
      ],
      minimum: 1,
      type: 'bloks',
    }),
    defineField('columns', {
      options: [
        {
          _uid: 'a9a63dd2-ce69-400d-aa20-4aec1da8b1fb',
          name: 'one',
          value: 'One',
        },
        {
          _uid: '488a57b5-19ad-4a52-8db6-75b593c3c5a2',
          name: 'two',
          value: 'Two',
        },
        {
          _uid: '6ca877ee-dd24-4711-b231-88bb65e24633',
          name: 'three',
          value: 'Three',
        },
        {
          _uid: '650ef052-296e-48ee-861a-6a69a25b3d4f',
          name: 'four',
          value: 'Four',
        },
      ],
      type: 'option',
      use_uuid: true,
    }),
    defineField('theme', {
      datasource: 'theme',
      source: 'internal',
      type: 'option',
      use_uuid: true,
    }),
  ],
});
