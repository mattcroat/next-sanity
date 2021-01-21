import { YouTubePreview } from '../components/YouTubePreview'

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
    component: YouTubePreview,
  },
}
