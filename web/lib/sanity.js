import sanityClient from '@sanity/client'
import sanityImage from '@sanity/image-url'

import { Step } from '@/root/components/Step'
import { YouTubePreview } from '@/root/components/YouTubePreview'

const options = {
  dataset: 'production',
  projectId: 'qcs6cyzw',
  useCdn: true,
}

const client = sanityClient(options)
const imageUrlBuilder = sanityImage(client)

export const serializers = {
  types: {
    youtube: ({ node: { url } }) => <YouTubePreview url={url} />,
    step: ({ node: { number, description } }) => (
      <Step stepNumber={number} description={description} />
    ),
  },
}

export function urlFor(source) {
  return imageUrlBuilder.image(source)
}

export default client
