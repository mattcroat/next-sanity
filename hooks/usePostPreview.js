import { usePreviewSubscription } from '@/root/lib/sanity'

export function usePostPreview(postData, preview) {
  const { data: post } = usePreviewSubscription(
    `*[_type == 'post' && slug.current == $slug][0] {
      _id,
      title,
      'slug': slug.current,
      mainImage,
      ingredients,
      body,
      publishedAt,
      tags,
    }`,
    {
      params: { slug: postData?.slug },
      initialData: postData,
      enabled: preview !== undefined,
    }
  )

  return post
}
