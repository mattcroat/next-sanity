import Link from 'next/link'

import sanityClient from '../lib/sanity'

export default function Index({ posts }) {
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map(({ _id, title, slug, publishedAt }) => (
          <li key={_id}>
            <Link href={`/post/${encodeURIComponent(slug.current)}`}>
              <a>{title}</a>
            </Link>
            <span> ({new Date(publishedAt).toDateString()})</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await sanityClient.fetch(`
    *[_type == 'post'] {
      _id,
      title,
      slug,
      publishedAt
    }
  `)

  return {
    props: {
      posts,
    },
  }
}
