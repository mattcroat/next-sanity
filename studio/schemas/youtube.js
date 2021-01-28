import { YouTubeEmbed } from '@root/components/shared/YouTubeEmbed'

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      description: 'Enter a YouTube video URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: YouTubeEmbed,
  },
}
