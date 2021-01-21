export default {
  name: 'step',
  type: 'object',
  title: 'Step',
  fields: [
    {
      name: 'number',
      type: 'number',
      title: 'Number',
      description: 'Enter step number',
      validation: (Rule) => Rule.required().error(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'Enter step description',
      validation: (Rule) => Rule.required().error(),
    },
  ],
  preview: {
    select: {
      step: 'number',
    },
    prepare({ step = '' }) {
      return {
        title: `Step ${step}`,
      }
    },
  },
}
