import type { ReactNode } from 'react'
import '../styles/globals.css'
import { SiteFooter } from '../components/layout/site-footer'
import { SiteHeader } from '../components/layout/site-header'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  )
}
