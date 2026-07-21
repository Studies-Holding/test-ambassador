import type { CollectionConfig } from 'payload';

export const Articles : CollectionConfig = {
    slug: 'articles',
    admin: {
        useAsTitle: 'title',
    },

     access: {
        read: () => true,
    },

    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'excerpt',
            type: 'textarea',
            required: true,
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
        },
        {
            name: 'author',
            type: 'text',
            required: true,
        },
    ],
}