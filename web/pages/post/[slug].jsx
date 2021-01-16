import BlockContent from '@sanity/block-content-to-react'

import sanityClient, { imageBuilder } from '../../lib/sanity'

export default function Post({
  post: { title, mainImage, body, publishedAt },
}) {
  return (
    <article>
      <h1>{title}</h1>
      <p>{new Date(publishedAt).toDateString()}</p>
      <img src={imageBuilder.image(mainImage).url()} alt={title} />
      <BlockContent blocks={body} />
    </article>
  )
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const post = await sanityClient.fetch(`
    *[_type == 'post' && slug.current == '${slug}'][0] {
      _id,
      title,
      mainImage,
      body,
      publishedAt
    }
  `)

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = await sanityClient.fetch(`
    *[_type == 'post'] {
      'slug': slug.current
    }
  `)

  return {
    paths: posts.map(({ slug }) => `/post/${slug}`),
    fallback: false,
  }
}
