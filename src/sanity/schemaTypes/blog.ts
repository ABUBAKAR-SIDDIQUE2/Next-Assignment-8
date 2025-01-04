import { defineType, defineField } from "sanity"

export const blog = defineType({
    name: 'blog',
    type: 'document',
    title: 'Blog Website',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Title For Blog'
        }),
        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug Of Title',
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: 'titleImage',
            type: 'image',
            title: 'Title Image'
        }),
        defineField({
            name: 'smallDescription',
            type: 'string',
            title: 'Small Description For Front'
        }),
        defineField({
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [{type: 'block'}]
        })
    ]
})