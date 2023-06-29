import './globals.css'

import { Metadata } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import React from 'react'

/* const robotoSlab = Roboto_Slab({
  preload: true,
  subsets: ['latin'],
  weight: ['300', '400', '600'],
})

const workSans = Work_Sans({
  preload: true,
  subsets: ['latin'],
  weight: ['300', '400'],
})

const caveat = Caveat({
  preload: true,
  subsets: ['latin'],
  weight: ['700'],
}) */

export const metadata: Metadata = {
  title: '@fcfett/about',
  description: "Nice to meet you! I'm Fett. 👋",
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
      <Head>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat&family=Gochi+Hand&family=Work+Sans:wght@300;400&family=Roboto+Slab:wght@300;400;700&display=swap"
        />
      </Head>
      <body
      /* className={classNames(
          caveat.className,
          robotoSlab.className,
          workSans.className
        )} */
      >
        {children}
      </body>
    </html>
  )
}
