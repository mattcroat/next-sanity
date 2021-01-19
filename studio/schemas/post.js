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
      of: [
        {
          name: 'ingredient',
          title: 'Ingredients',
          type: 'object',
          fields: [
            {
              name: 'amount',
              title: 'Amount',
              type: 'string',
              validation: (Rule) => Rule.required().error(),
            },
            {
              name: 'unit',
              title: 'Unit',
              type: 'string',
              options: {
                list: [
                  { title: 'litres (L)', value: 'L' },
                  { title: 'millilitres (mL)', value: 'mL' },
                  { title: 'grams (g)', value: 'g' },
                  { title: 'kilograms (kg)', value: 'kg' },
                  { title: 'teaspoon (tsp.)', value: 'tsp' },
                  { title: 'tablespoon (tbsp.)', value: 'tbsp' },
                ],
                layout: 'dropdown',
              },
            },
            {
              name: 'ingredient',
              title: 'Ingredient',
              type: 'string',
              validation: (Rule) => Rule.required().error(),
            },
          ],
          preview: {
            select: {
              amount: 'amount',
              unit: 'unit',
              ingredient: 'ingredient',
            },
            prepare({ amount = '', unit, ingredient }) {
              if (!unit) {
                return {
                  title: `${amount} ${ingredient}`,
                }
              }

              return {
                title: `${amount} ${unit} of ${ingredient}`,
              }
            },
          },
        },
      ],
    },
    {
      name: 'body',
      title: 'Content',
      type: 'blockContent',
      description: 'Write your post here',
    },
    {
      name: 'keywords',
      type: 'array',
      title: 'Keywords',
      description: 'Enter some unique keywords used for search',
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
