import './globals.css'

//import { Roboto_Slab, Work_Sans } from 'next/font/google'
import { HTMLAttributes } from 'react'

/*
const robotoSlab = Roboto_Slab({
  preload: true,
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '700'],
})

const workSans = Work_Sans({
  preload: true,
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400'],
})
*/

export const metadata = {
  title: '@fcfett',
  description: "Nice to meet you! I'm Fett",
}

type RootLayoutProps = HTMLAttributes<HTMLBodyElement>

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&amp;family=Work+Sans:wght@300;400;600&amp;family=Roboto+Slab:wght@300;700&amp;display=swap"
          rel="stylesheet"
        />
      </head>
      <body
      /* className={classNames(robotoSlab.className, workSans.className)} */
      >
        {children}
      </body>
    </html>
  )
}
