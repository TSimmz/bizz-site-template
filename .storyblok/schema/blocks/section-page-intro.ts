import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const sectionPageIntroBlock = defineBlock({
  name: 'section_page_intro',
  display_name: 'Page Intro Section',
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
    defineField('theme', {
      datasource: 'theme',
      default_value: 'dark',
      source: 'internal',
      type: 'option',
      use_uuid: true,
    }),
    defineField('alignment', {
      default_value: 'left',
      options: [
        {
          _uid: '18bc2431-960e-451c-80c4-8a293db1b90a',
          name: 'left',
          value: 'Left',
        },
        {
          _uid: 'e98cfad6-f179-41bf-a670-a28f989a7e80',
          name: 'center',
          value: 'Center',
        },
        {
          _uid: '654821dd-7176-4d25-8a51-cc9e7fd9f96a',
          name: 'right',
          value: 'Right',
        },
      ],
      required: true,
      type: 'option',
      use_uuid: true,
    }),
  ],
});
