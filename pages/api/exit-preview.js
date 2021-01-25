export default async function exit(_, res) {
  // exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData()

  // redirect the user back to the index page.
  res.writeHead(307, { Location: '/' })
  res.end()
}
