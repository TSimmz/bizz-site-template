import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const itemResourceBlock = defineBlock({
  name: 'item_resource',
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
    defineField('title', {
      type: 'text',
    }),
    defineField('description', {
      type: 'textarea',
    }),
    defineField('resource_type', {
      datasource: 'resource-type',
      source: 'internal',
      type: 'option',
      use_uuid: true,
    }),
    defineField('link', {
      asset_link_type: false,
      email_link_type: false,
      required: true,
      restrict_content_types: false,
      type: 'multilink',
    }),
    defineField('thumbnail', {
      filetypes: [
        'images',
      ],
      type: 'asset',
    }),
  ],
});
