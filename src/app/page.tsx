import Carreer from '@/components/carreer'
import Hero from '@/components/hero'
import OtherPassions from '@/components/other-passions'
import Quote from '@/components/quote'
import Social from '@/components/social'
import Slide from '@/components/viewport-slider/slide'
import ViewportSlider from '@/components/viewport-slider/slider'

export default function Home() {
  return (
    <main className="absolute inset-0 flex overflow-hidden">
      <ViewportSlider>
        <Slide
          id="hero"
          className="items-center justify-center overflow-hidden p-4"
        >
          <Hero />
        </Slide>
        <Slide id="work-experience" className="px-6 py-10">
          <Carreer />
        </Slide>
        <Slide
          id="quote"
          className="max-h-fit flex-row flex-wrap items-center overflow-hidden bg-black px-6 py-10"
        >
          <Quote />
        </Slide>
        <Slide id="other-passions" className="px-6 py-10">
          <OtherPassions />
        </Slide>
        <Slide id="social" className="px-6 py-10">
          <Social />
        </Slide>
      </ViewportSlider>
    </main>
  )
}
