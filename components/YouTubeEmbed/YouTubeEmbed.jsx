import { getYouTubeId } from '@/root/utils'

export function YouTubeEmbed({ url }) {
  const videoId = getYouTubeId(url)

  return (
    <iframe
      title="YouTube Preview"
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  )
}
