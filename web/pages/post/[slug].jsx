import styled from '@emotion/styled'
import PortableText from '@sanity/block-content-to-react'

import sanityClient, { serializers, urlFor } from '@/root/lib/sanity'

export default function Post({
  post: { title, mainImage, ingredients, body, publishedAt, keywords },
}) {
  const time = new Date(publishedAt).toDateString()
  const src = urlFor(mainImage).url()

  return (
    <Article>
      <h1>{title}</h1>
      <span>{time}</span>
      <img src={src} alt={title} />

      {ingredients && (
        <>
          <h2>Ingredients</h2>
          <Ingredients>
            {ingredients.map(({ _key, amount, unit, ingredient }) => (
              <Ingredient key={_key}>
                {amount} {unit} of {ingredient}
              </Ingredient>
            ))}
          </Ingredients>
        </>
      )}

      <PortableText
        blocks={body}
        serializers={serializers}
        {...sanityClient.config()}
      />

      <Keywords>
        {keywords &&
          keywords.map((keyword) => <Keyword key={keyword}>{keyword}</Keyword>)}
      </Keywords>
    </Article>
  )
}

const Article = styled.article`
  max-width: 80ch;
  margin: 0 auto;
`

const Ingredients = styled.ul`
  list-style: none;
`

const Ingredient = styled.li`
  &::marker {
    content: ' 🥕 ';
  }
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
      ingredients,
      body,
      publishedAt,
      keywords,
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
