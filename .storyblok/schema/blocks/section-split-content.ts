import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const sectionSplitContentBlock = defineBlock({
  name: 'section_split_content',
  display_name: 'Split Content Section',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527772470874',
  ],
  fields: [
    defineField('eyebrow', {
      max_length: 60,
      type: 'text',
    }),
    defineField('heading', {
      max_length: 120,
      required: true,
      type: 'text',
    }),
    defineField('body', {
      type: 'richtext',
    }),
    defineField('media', {
      filetypes: [
        'images',
      ],
      required: true,
      tooltip: false,
      type: 'asset',
    }),
    defineField('actions', {
      allow: [
        'item_action',
      ],
      maximum: 2,
      minimum: 0,
      type: 'bloks',
    }),
    defineField('media_position', {
      default_value: 'left',
      options: [
        {
          _uid: '0848b285-ad0c-4865-82fe-e69394f87873',
          name: 'left',
          value: 'Left',
        },
        {
          _uid: '3998a477-b581-4946-a0c7-287a36e13113',
          name: 'right',
          value: 'Right',
        },
      ],
      type: 'option',
      use_uuid: true,
    }),
    defineField('media_style', {
      datasource: 'media-style',
      source: 'internal',
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
