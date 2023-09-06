import Career from '@/components/career'
import Hero from '@/components/hero'
import OtherPassions from '@/components/other-passions'
import Quote from '@/components/quote'
import ScrollButton from '@/components/scroll-button'
import Social from '@/components/social'
import ThemeSwitcher from '@/components/theme-toggle'
import Slide from '@/components/viewport-slider/slide'
import ViewportSlider from '@/components/viewport-slider/slider'

export default function Home() {
  return (
    <main className="absolute inset-0 flex overflow-hidden font-sans font-normal">
      <ThemeSwitcher />
      <ViewportSlider>
        <Slide
          id="hero"
          className="items-center justify-center overflow-hidden p-4"
        >
          <Hero />
          <ScrollButton href="#work-experience" />
        </Slide>
        <Slide id="work-experience" className="overflow-hidden px-6 py-10">
          <Career />
          <ScrollButton href="#quote" />
        </Slide>
        <Slide
          id="quote"
          className="max-h-fit flex-row flex-wrap items-center justify-center overflow-hidden bg-black px-6 py-10"
        >
          <Quote />
          <ScrollButton
            href="#other-passions"
            className="invert-colors hover:hover-invert"
          />
        </Slide>
        <Slide id="other-passions" className="overflow-hidden px-6 py-10">
          <OtherPassions />
          <ScrollButton href="#social" />
        </Slide>
        <Slide id="social" className="px-6 py-10">
          <Social />
          <ScrollButton href="#hero" isUpwards />
        </Slide>
      </ViewportSlider>
    </main>
  )
}
