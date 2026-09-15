import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const globalContactInfoBlock = defineBlock({
  name: 'global_contact_info',
  display_name: 'Global Contact Info',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527848693341',
  ],
  fields: [
    defineField('items', {
      allow: [
        'item_contact_method',
      ],
      type: 'bloks',
    }),
  ],
});
