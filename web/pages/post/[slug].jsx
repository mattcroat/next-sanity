import styled from '@emotion/styled'
import BlockContent from '@sanity/block-content-to-react'

import sanityClient, { imageBuilder } from '@/root/lib/sanity'

export default function Post({
  post: { title, mainImage, body, publishedAt, keywords },
}) {
  return (
    <Article>
      <h1>{title}</h1>
      <span>{new Date(publishedAt).toDateString()}</span>
      <img src={imageBuilder.image(mainImage).url()} alt={title} />
      <BlockContent blocks={body} {...sanityClient.config()} />
      <Keywords>
        {keywords.map((keyword) => (
          <Keyword key={keyword}>{keyword}</Keyword>
        ))}
      </Keywords>
    </Article>
  )
}

const Article = styled.article`
  max-width: 80ch;
  margin: 0 auto;
`

const Keywords = styled.div`
  font-size: 1rem;
  margin: 3rem 0;
`

const Keyword = styled.div`
  height: 40px;
  display: inline-flex;
  align-items: center;
  font-weight: bold;
  color: saddlebrown;
  background-color: peachpuff;
  padding: 1rem;
  margin-right: 1rem;
  border-radius: 4px;
`

export async function getStaticProps({ params }) {
  const { slug } = params

  const post = await sanityClient.fetch(`
    *[_type == 'post' && slug.current == '${slug}'][0] {
      _id,
      title,
      mainImage,
      body,
      publishedAt,
      keywords
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
