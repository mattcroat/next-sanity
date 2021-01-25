import { sanityClient, sanityPreviewClient } from './sanity'

const getClient = (preview) => (preview ? sanityPreviewClient : sanityClient)

export async function getPosts() {
  const posts = await sanityClient.fetch(`
    *[_type == 'post'] {
      _id,
      title,
      slug,
      publishedAt
    }
  `)

  return posts
}

// only used in api/preview.js to check if slug exists
export async function getPreviewPostBySlug(slug) {
  const [post] = await getClient(true).fetch(
    `*[_type == 'post' && slug.current == $slug] | order(date desc){
      _id,
      title,
      mainImage,
      ingredients,
      body,
      publishedAt,
      keywords,
      'slug': slug.current,
    }`,
    { slug }
  )

  return post
}

export async function getPostBySlug(slug, preview) {
  const [post, draftPost] = await getClient(preview).fetch(
    `*[_type == 'post' && slug.current == $slug] | order(date desc) {
      _id,
      title,
      mainImage,
      ingredients,
      body,
      publishedAt,
      keywords,
      'slug': slug.current,
    }`,
    { slug }
  )

  return preview ? draftPost ?? post : post
}

export async function getPostSlugs() {
  const posts = await sanityClient.fetch(`
    *[_type == 'post'] {
      'slug': slug.current
    }
  `)

  return posts
}
