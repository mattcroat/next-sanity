export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Used as the main title',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Used as the post URL',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'mainImage',
      title: 'Image',
      type: 'image',
      description: 'The main hero image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          description: 'Used as the description',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessiblity',
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: 'publishedAt',
      title: 'Published',
      type: 'datetime',
      description: 'Time when the post was published',
    },
    {
      name: 'ingredients',
      type: 'array',
      title: 'Ingredients',
      of: [{ type: 'ingredient' }],
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      description: 'Write your post here',
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      description: 'Enter some unique tags used for search',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const { author } = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
