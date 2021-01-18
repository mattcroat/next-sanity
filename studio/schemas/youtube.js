import React from 'react'

function getYouTubeId(url) {
  const regularUrl = /watch\?v=/.test(url)
  const shareUrl = /youtu.be/.test(url)

  if (regularUrl) {
    return url.match(/watch\?v=(.*)/)[1]
  }

  if (shareUrl) {
    return url.match(/youtu.be\/(.*)/)[1]
  }
}

function YouTubePreview({ value }) {
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

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'URL',
      description: 'Enter a YouTube video URL',
    },
  ],
  preview: {
    select: {
      url: 'url',
    },
    component: YouTubePreview,
  },
}
