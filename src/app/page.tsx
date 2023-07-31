import Image from 'next/image'

import Career from '@/components/career'
import Hero from '@/components/hero'
import OtherPassions from '@/components/other-passions'
import Quote from '@/components/quote'
import Social from '@/components/social'
import ThemeSwitcher from '@/components/theme-toggle'
import Slide from '@/components/viewport-slider/slide'
import ViewportSlider from '@/components/viewport-slider/slider'

import Form from './form'

const API_PATH = 'http://localhost:3000'

interface Data {
  userId: number
  id: number
  title: string
  body: string
  image: string
  authorName: string
}

async function getData() {
  const res = await fetch(API_PATH)

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function HomePage() {
  const data = await getData()

  return (
    <main className="absolute inset-0 flex flex-col overflow-auto bg-white font-sans font-normal text-black">
      <header className="sticky top-0 flex justify-between border-b border-black bg-white/60 p-4 backdrop-blur">
        <h1>My Blog</h1>
        <ul className="flex gap-2">
          <li>Home</li>
          <li>|</li>
          <li>Contact</li>
        </ul>
      </header>
      <Form />
      <ul className="grid grid-cols-1 items-start justify-items-center gap-8 p-4 xs:grid-cols-2 lg:grid-cols-3">
        {data.map(({ title, authorName, id, image }: Data) => (
          <li
            className="flex h-full max-w-xs flex-col items-center gap-2"
            key={id}
          >
            <figure className="h-32 w-32 border border-black bg-slate-200">
              <Image
                src={image}
                width={128}
                height={128}
                alt={`Thumbnail for post "${title}"`}
              />
            </figure>
            <h2 className="flex flex-1 items-center text-center font-serif text-sm font-semibold capitalize">
              {title || 'PLACEHOLDER TITLE'}
            </h2>
            <small>By: {authorName || 'PLACEHOLDER NAME'}</small>
          </li>
        ))}
      </ul>
    </main>
  )
}

export function Home() {
  return (
    <main className="absolute inset-0 flex overflow-hidden font-sans font-normal">
      <ThemeSwitcher />
      <ViewportSlider>
        <Slide
          id="hero"
          className="items-center justify-center overflow-hidden p-4"
        >
          <Hero />
        </Slide>
        <Slide id="work-experience" className="overflow-hidden px-6 py-10">
          <Career />
        </Slide>
        <Slide
          id="quote"
          className="max-h-fit flex-row flex-wrap items-center overflow-hidden bg-black px-6 py-10"
        >
          <Quote />
        </Slide>
        <Slide id="other-passions" className="overflow-hidden px-6 py-10">
          <OtherPassions />
        </Slide>
        <Slide id="social" className="px-6 py-10">
          <Social />
        </Slide>
      </ViewportSlider>
    </main>
  )
}
