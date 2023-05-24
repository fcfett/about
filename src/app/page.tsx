import Hero from '@/components/hero'

const WORKING_EXPERIENCES = [
  {
    company: 'Legends Of Learning',
    startDate: '2022-01-09',
    url: 'https://www.linkedin.com/company/legends-of-learning/',
  },

  {
    company: 'Agi',
    startDate: '2021-01-01',
    url: 'https://www.linkedin.com/company/agibank/',
  },
]

export default function Home() {
  return (
    <main className="absolute inset-0 flex overflow-hidden">
      <ul className="relative flex h-full w-full snap-y snap-mandatory flex-col overflow-auto">
        <li className="relative flex min-h-full w-full flex-1 snap-center flex-col items-center justify-center overflow-hidden p-4">
          <Hero />
        </li>
        <li className="relative flex min-h-full w-full flex-1 snap-center flex-col px-6 py-10">
          <h1 className="font-serif text-5xl font-bold">Work Experience</h1>
          <ul className="my-auto flex flex-wrap items-center justify-center gap-4">
            {WORKING_EXPERIENCES.map(({ startDate, company, url }) => (
              <li key={startDate} className="">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col items-center text-center hover:underline"
                >
                  <h2>{company}</h2>
                  <small>{startDate}</small>
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </main>
  )
}
