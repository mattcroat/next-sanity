import styled from '@emotion/styled'

import { PortableText, urlFor } from '@/root/lib/sanity'

export function Post({
  title,
  mainImage,
  ingredients,
  body,
  publishedAt,
  tags,
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

      <PortableText blocks={body} />

      <Tags>{tags && tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}</Tags>
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

const Tags = styled.div`
  font-size: 1rem;
  margin: 3rem 0;
`

const Tag = styled.div`
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
