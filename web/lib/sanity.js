import sanityClient from '@sanity/client'
import sanityImage from '@sanity/image-url'

const options = {
  dataset: 'production',
  projectId: 'qcs6cyzw',
  useCdn: true,
}

const client = sanityClient(options)

export const imageBuilder = sanityImage(client)

export default client
