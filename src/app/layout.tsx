import './globals.css'

import classNames from 'classnames'
import { Caveat, Roboto_Slab, Work_Sans } from 'next/font/google'
import Script from 'next/script'
import React from 'react'
const robotoSlab = Roboto_Slab({
  preload: true,
  /* display: 'swap', */
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

const workSans = Work_Sans({
  preload: true,
  /* display: 'swap', */
  subsets: ['latin'],
  weight: ['300', '400'],
})

const caveat = Caveat({
  preload: true,
  /* display: 'swap', */
  subsets: ['latin'],
  weight: ['700'],
})
export const metadata = {
  title: '@fcfett',
  description: "Nice to meet you! I'm Fett",
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      {/* <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&family=Work+Sans:wght@300;400;600&family=Roboto+Slab:wght@300;600;700&display=swap"
          rel="stylesheet"
        />
      </Head> */}
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
