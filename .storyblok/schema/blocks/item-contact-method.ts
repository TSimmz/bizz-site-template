import {
  defineBlock,
  defineField,
} from '@storyblok/schema';

export const itemContactMethodBlock = defineBlock({
  name: 'item_contact_method',
  display_name: 'Contact Method',
  is_root: false,
  is_nestable: true,
  description: '',
  internal_tag_ids: [
    '216527800835675',
  ],
  fields: [
    defineField('type', {
      options: [
        {
          _uid: 'c562cb08-bec8-4f8f-abc8-a18da64c371a',
          name: 'email',
          value: 'Email',
        },
        {
          _uid: 'ae91db26-5b7e-4230-8038-0c2e63e0d27e',
          name: 'phone',
          value: 'Phone',
        },
        {
          _uid: 'c184a4ef-77ff-4c94-bc6d-a2dc628ff0d6',
          name: 'address',
          value: 'Address',
        },
        {
          _uid: '0c9d0fb8-9010-4053-b84d-7a9613807240',
          name: 'hours',
          value: 'Business Hours',
        },
        {
          _uid: '91960f55-240c-405a-87de-9331bdff1c8c',
          name: 'website',
          value: 'Website',
        },
        {
          _uid: '1e449408-8469-4489-85bb-a143271c9265',
          name: 'other',
          value: 'Other',
        },
      ],
      required: true,
      type: 'option',
      use_uuid: true,
    }),
    defineField('label', {
      type: 'text',
    }),
    defineField('value', {
      required: true,
      type: 'text',
    }),
    defineField('link', {
      type: 'multilink',
    }),
  ],
});
