export function PostPreview({ document: { displayed } }) {
  if (!displayed?.slug?.current) {
    return <div>The product needs a slug before it can be previewed.</div>
  }
  const url =
    process.env.NODE_ENV === 'production'
      ? `../../posts/${displayed?.slug?.current}?preview`
      : `http://localhost:3000/posts/${displayed?.slug?.current}?preview`

  return <iframe src={url} frameBorder={'0'} />
}
