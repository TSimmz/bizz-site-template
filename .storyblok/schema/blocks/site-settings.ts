import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const siteSettingsBlock = defineBlock({
  name: 'site_settings',
  is_root: true,
  is_nestable: false,
  description: '',
  internal_tag_ids: [
    '216527726665305',
  ],
  fields: [
    defineField('site_name', {
      type: 'text',
    }),
    defineField('site_description', {
      type: 'textarea',
    }),
    defineField('logo', {
      filetypes: [
        'images',
      ],
      required: false,
      tooltip: true,
      type: 'asset',
    }),
    defineField('logo_dark', {
      filetypes: [
        'images',
      ],
      tooltip: true,
      type: 'asset',
    }),
    defineField('favicon', {
      filetypes: [
        'images',
      ],
      tooltip: false,
      type: 'asset',
    }),
    defineField('default_social_image', {
      filetypes: [
        'images',
      ],
      tooltip: true,
      type: 'asset',
    }),
  ],
});
