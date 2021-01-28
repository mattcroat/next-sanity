import React from 'react'

export function PostPreview({ document: { displayed } }) {
  if (!displayed?.slug?.current) {
    return <h1>The post needs a slug before it can be previewed.</h1>
  }

  const url =
    process.env.NODE_ENV === 'production'
      ? `/posts/${displayed?.slug?.current}?preview`
      : `http://localhost:3000/posts/${displayed?.slug?.current}?preview`

  return (
    <iframe
      style={{
        border: 0,
        height: '100%',
        left: 0,
        position: 'absolute',
        top: 0,
        width: '100%',
      }}
      src={url}
      frameBorder="0"
    />
  )
}
