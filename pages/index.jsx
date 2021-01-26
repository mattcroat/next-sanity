import styled from '@emotion/styled'
import Link from 'next/link'

import { getPosts } from '@/root/lib/api'

export default function Index({ posts }) {
  return (
    <Container>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ _id, title, slug, publishedAt }) => (
          <li key={_id}>
            <Link href={`/posts/${encodeURIComponent(slug.current)}`}>
              <a>{title}</a>
            </Link>
            <span> ({new Date(publishedAt).toDateString()})</span>
          </li>
        ))}
      </ul>
    </Container>
  )
}

const Container = styled.main`
  max-width: 800px;
  margin: 4rem auto;
`

export async function getStaticProps() {
  const posts = await getPosts()

  return {
    props: {
      posts,
    },
  }
}
