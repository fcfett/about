import './globals.css'

import classNames from 'classnames'
import { Metadata } from 'next'
import { Caveat, Roboto_Slab, Work_Sans } from 'next/font/google'
import Script from 'next/script'
import React from 'react'

const robotoSlab = Roboto_Slab({
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  weight: ['300', '400', '600'],
})

const workSans = Work_Sans({
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  weight: ['300', '400'],
})

const caveat = Caveat({
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  weight: ['700'],
})
export const metadata: Metadata = {
  title: '@fcfett',
  description: "Nice to meet you! I'm Fett.",
  openGraph: {
    type: 'website',
    images:
      'https://raw.githubusercontent.com/fcfett/resources/master/profile.jpg',
  },
}
type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <Script type="text/javascript" src="/static/set-theme.js" />
      <body
        className={classNames(
          caveat.className,
          robotoSlab.className,
          workSans.className
        )}
      >
        {children}
      </body>
    </html>
  )
}
