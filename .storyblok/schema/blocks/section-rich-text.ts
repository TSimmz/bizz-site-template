import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const sectionRichTextBlock = defineBlock({
  name: 'section_rich_text',
  display_name: 'Rich Text Section',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527772470874',
  ],
  fields: [
    defineField('heading', {
      max_length: 120,
      required: true,
      type: 'text',
    }),
    defineField('content', {
      type: 'richtext',
    }),
    defineField('width', {
      datasource: 'width',
      default_value: 'content',
      max_value: 100,
      min_value: 0,
      source: 'internal',
      steps: 1,
      type: 'option',
      use_uuid: true,
    }),
    defineField('alignment', {
      default_value: 'left',
      options: [
        {
          _uid: '54afc891-8343-42d5-b2bd-0041d5effe65',
          name: 'left',
          value: 'Left',
        },
        {
          _uid: '8bf862d9-1e54-42b9-a84a-da80a8d56d76',
          name: 'center',
          value: 'Center',
        },
        {
          _uid: '7a4a293b-ed80-4d36-96f6-9b3212f24bf8',
          name: 'right',
          value: 'Right',
        },
      ],
      required: true,
      type: 'option',
      use_uuid: true,
    }),
    defineField('theme', {
      datasource: 'theme',
      default_value: 'dark',
      source: 'internal',
      type: 'option',
      use_uuid: true,
    }),
  ],
});
