import { useRouter } from 'next/router'

import { Post } from '@/root/components/Post'
import { getPostBySlug, getPostSlugs } from '@/root/lib/api'

import { usePostPreview } from '@/root/hooks/usePostPreview.js'

export default function PostPage({ postData }) {
  const { query } = useRouter()
  const post = usePostPreview(postData, query?.preview)

  return <Post {...post} />
}

export async function getStaticProps({ params = {} }) {
  const postData = await getPostBySlug(params.slug)

  return {
    props: {
      postData,
    },
  }
}

export async function getStaticPaths() {
  const slugs = await getPostSlugs()

  return {
    paths: slugs.map(({ slug }) => `/posts/${slug}`),
    fallback: false,
  }
}
