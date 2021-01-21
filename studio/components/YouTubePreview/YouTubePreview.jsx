import React from 'react'

import { getYouTubeId } from '../../utils'

export function YouTubePreview({ value }) {
  const id = getYouTubeId(value.url)
  const url = `https://www.youtube.com/embed/${id}`

  if (!id) {
    return <div>Missing YouTube URL</div>
  }

  return (
    <iframe
      title="YouTube Preview"
      width="560"
      height="315"
      src={url}
      frameBorder="0"
    ></iframe>
  )
}
