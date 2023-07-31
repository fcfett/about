import './globals.css'

import classNames from 'classnames'
import { Metadata } from 'next'
import { Caveat, Roboto_Slab, Work_Sans } from 'next/font/google'

import PostHogScript from '@/scripts/post-hog-script'

const robotoSlab = Roboto_Slab({
  preload: true,
  display: 'swap',
  subsets: ['latin'],
  variable: '--roboto-slab',
  weight: ['300', '400', '700'],
})

const workSans = Work_Sans({
  preload: true,
  display: 'swap',
  subsets: ['latin'],
  variable: '--work-sans',
  weight: ['300', '400'],
})

const caveat = Caveat({
  preload: true,
  display: 'swap',
  subsets: ['latin'],
  variable: '--caveat',
  weight: '700',
})

export const metadata: Metadata = {
  title: '@fcfett/about',
  description: "Nice to meet you! I'm Fett. 👋",
  metadataBase: new URL('https://raw.githubusercontent.com'),
  openGraph: {
    type: 'website',
    images: '/fcfett/resources/master/profile.jpg',
  },
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="dark">
      <PostHogScript />
      <body
        className={classNames(
          caveat.variable,
          workSans.variable,
          robotoSlab.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
