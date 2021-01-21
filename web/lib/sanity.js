import sanityClient from '@sanity/client'
import sanityImage from '@sanity/image-url'

import { getYouTubeId } from '@/root/utils'

const options = {
  dataset: 'production',
  projectId: 'qcs6cyzw',
  useCdn: true,
}

const client = sanityClient(options)
const imageUrlBuilder = sanityImage(client)

export const serializers = {
  types: {
    youtube: ({ node: { url } }) => {
      const videoId = getYouTubeId(url)

      return (
        <iframe
          title="YouTube Preview"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      )
    },
  },
}

export function urlFor(source) {
  return imageUrlBuilder.image(source)
}

export default client
