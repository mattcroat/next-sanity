import { sanityClient } from './sanity'

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

export async function getPostBySlug(slug) {
  const post = await sanityClient.fetch(`
    *[_type == 'post' && slug.current == '${slug}'][0] {
      _id,
      title,
      mainImage,
      ingredients,
      body,
      publishedAt,
      keywords,
    }
  `)

  return post
}

export async function getPostSlugs() {
  const posts = await sanityClient.fetch(`
    *[_type == 'post'] {
      'slug': slug.current
    }
  `)

  return posts
}
