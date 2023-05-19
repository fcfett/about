import './globals.css'

import { Roboto_Slab } from 'next/font/google'
import { HTMLAttributes } from 'react'

const robotoSlab = Roboto_Slab({ subsets: ['latin'] })

export const metadata = {
  title: '@fcfett',
  description: "Nice to meet you! I'm Fett",
}

type RootLayoutProps = HTMLAttributes<HTMLBodyElement>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>{children}</body>
    </html>
  )
}
