import Carreer from '@/components/carreer'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <main className="absolute inset-0 flex overflow-hidden">
      <ul className="relative flex h-full w-full snap-y snap-mandatory flex-col overflow-auto">
        <li className="relative flex min-h-full w-full flex-1 snap-center flex-col items-center justify-center overflow-hidden p-4">
          <Hero />
        </li>
        <li
          id="work-experience"
          className="relative flex min-h-full w-full flex-1 snap-center flex-col px-6 py-10"
        >
          <Carreer />
        </li>
      </ul>
    </main>
  )
}
