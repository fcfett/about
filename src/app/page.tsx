import Hero from '@/components/hero'

export default function Home() {
  return (
    <main className="absolute inset-0 flex overflow-hidden p-4">
      <div className="relative flex flex-1 flex-col items-center justify-center">
        <Hero />
      </div>
    </main>
  )
}
