import { Preview } from '@/root/components/Preview'

export function Layout({ children, preview }) {
  return (
    <main>
      <Preview preview={preview} />
      {children}
    </main>
  )
}
