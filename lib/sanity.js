import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook,
} from 'next-sanity'

import { Step } from '@/root/components/Step'
import { YouTubeEmbed } from '@/root/components/YouTubeEmbed'

// config
const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
}

// hooks
export const usePreviewSubscription = createPreviewSubscriptionHook(config)

// helpers
export function urlFor(source) {
  return createImageUrlBuilder(config).image(source)
}

export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {
    types: {
      youtube: ({ node: { url } }) => <YouTubeEmbed url={url} />,
      step: ({ node: { number, description } }) => (
        <Step stepNumber={number} description={description} />
      ),
    },
  },
})

// client
export const sanityClient = createClient(config)
