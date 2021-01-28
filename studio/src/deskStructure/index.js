import S from '@sanity/desk-tool/structure-builder'

import { PostPreview } from '@root/components/previews/PostPreview'

export function getDefaultDocumentNode({ schemaType }) {
  if (schemaType === 'post') {
    return S.document().views([
      S.view.form(),
      S.view.component(PostPreview).title('Preview'),
    ])
  }
}

export default S.defaults()
