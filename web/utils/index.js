export function getYouTubeId(url) {
  const regularUrl = /watch\?v=/.test(url)
  const shareUrl = /youtu.be/.test(url)

  if (regularUrl) {
    return url.match(/watch\?v=(.*)/)[1]
  }

  if (shareUrl) {
    return url.match(/youtu.be\/(.*)/)[1]
  }
}
