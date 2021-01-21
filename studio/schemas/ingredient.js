export default {
  name: 'ingredient',
  type: 'object',
  title: 'Ingredients',
  icon: () => '🥕',
  fields: [
    {
      name: 'amount',
      title: 'Amount',
      type: 'string',
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
}
