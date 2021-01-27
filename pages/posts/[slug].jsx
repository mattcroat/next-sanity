import styled from '@emotion/styled'
import { useRouter } from 'next/router'

import { Layout } from '@/root/components/Layout'
import { getPostBySlug, getPostSlugs } from '@/root/lib/api'
import { PortableText, urlFor, usePreviewSubscription } from '@/root/lib/sanity'

export default function Post({ postData }) {
  const { query } = useRouter()

  const { data: post } = usePreviewSubscription(
    `*[_type == 'post' && slug.current == $slug][0] {
      _id,
      title,
      'slug': slug.current,
      mainImage,
      ingredients,
      body,
      publishedAt,
      keywords,
    }`,
    {
      params: { slug: postData?.slug },
      initialData: postData,
      enabled: query.preview !== undefined,
    }
  )

  const { title, mainImage, ingredients, body, publishedAt, keywords } = post
  const time = new Date(publishedAt).toDateString()
  const src = urlFor(mainImage).url()

  return (
    <Layout>
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

        <PortableText blocks={body} />

        <Keywords>
          {keywords &&
            keywords.map((keyword) => (
              <Keyword key={keyword}>{keyword}</Keyword>
            ))}
        </Keywords>
      </Article>
    </Layout>
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
