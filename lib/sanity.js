import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
} from 'next-sanity'

import { Step } from '@/root/components/Step'
import { YouTubePreview } from '@/root/components/YouTubePreview'

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
}

export function urlFor(source) {
  return createImageUrlBuilder(config).image(source)
}

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {
    types: {
      youtube: ({ node: { url } }) => <YouTubePreview url={url} />,
      step: ({ node: { number, description } }) => (
        <Step stepNumber={number} description={description} />
      ),
    },
  },
})

export const sanityClient = createClient(config)
