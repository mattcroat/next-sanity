import sanityClient from '@sanity/client'
import sanityImage from '@sanity/image-url'

const options = {
  dataset: 'production',
  projectId: 'qcs6cyzw',
  useCdn: true,
}

const client = sanityClient(options)
const imageUrlBuilder = sanityImage(client)

export function urlFor(source) {
  return imageUrlBuilder.image(source)
}

export default client
