export default {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      name: 'author',
      type: 'document',
      title: 'Author',
      fields: [
          {
              name: 'title',
              type: 'string',
              title: 'Name'
          },
          {
              name: 'about',
              type: 'string',
              title: 'About Aurthor'
          },
        ]
    },
    {
      title: 'Blog Image',
      name: 'blogimage',
      type: 'image',
      options: {
        hotspot: true
      },
    },
    {
      title: 'Created At',
      name: 'createdAt',
      type: 'datetime',
    },
    {
      name: 'metadesc',
      type: 'string',
      title: 'Meta Description'
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block'
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              options: {
                isHighlighted: true
              },
              description: `Some of your visitors cannot see images, 
                    alternative text is of great help for those 
                    people that can rely on it to have a good idea of 
                    what\'s on your page.`
            }
          ]
        }
      ]
    } 
  ]
};