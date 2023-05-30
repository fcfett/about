import { DateTime } from 'luxon'

import RoundFrameImage from '@/components/round-framed-image'

const WORKING_EXPERIENCES = [
  {
    company: 'Legends Of Learning',
    startDate: '2022-01-09',
    url: 'https://www.linkedin.com/company/legends-of-learning/',
    imageUrl: '/companies/lol.jpg',
  },
  {
    company: 'Agi',
    startDate: '2021-01-01',
    url: 'https://www.linkedin.com/company/agibank/',
    imageUrl: '/companies/agi.jpg',
  },
  {
    url: 'https://www.linkedin.com/company/adpbrazillabs/',
    company: 'ADP Brazil Labs',
    startDate: '2020-03-01',
    imageUrl: '/companies/adp.jpg',
  },
  {
    url: 'https://www.linkedin.com/company/vg8/',
    company: 'VG8',
    startDate: '2019-05-01',
    imageUrl: '/companies/vg8.jpg',
  },
  {
    url: 'https://www.linkedin.com/company/grupols/',
    company: 'Grupo L&S',
    startDate: '2017-06-01',
    imageUrl: '/companies/ls.jpg',
  },
  {
    url: 'https://www.linkedin.com/company/stefanini-brasil',
    company: 'Stefanini / Dell',
    startDate: '2015-09-01',
    imageUrl: '/companies/stefanini.jpg',
  },
  {
    url: 'https://www.linkedin.com/company/ntconsult',
    company: 'NTConsult',
    startDate: '2011-05-01',
    imageUrl: '/companies/nt.jpg',
  },
]

const WORKING_EXPERIENCES_BY_DATE_ASC = WORKING_EXPERIENCES.sort(
  (a, b) => +DateTime.fromISO(a.startDate) - +DateTime.fromISO(b.startDate)
)

export default function Carreer() {
  return (
    <>
      <h1 className="font-serif text-4xl font-black uppercase">
        Work Experience
      </h1>
      <ul className="my-auto flex flex-wrap items-center justify-center gap-4">
        {WORKING_EXPERIENCES_BY_DATE_ASC.map(
          ({ startDate, company, url, imageUrl }) => (
            <li key={startDate}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="relative flex flex-col items-center text-center hover:underline"
              >
                <RoundFrameImage alt="Boba/Jango Fett helmet" src={imageUrl} />
                <h2 className="hidden font-serif font-bold lg:block">
                  {company}
                </h2>
                <small>
                  {DateTime.fromISO(startDate).toLocaleString({
                    month: 'short',
                    year: 'numeric',
                  })}
                </small>
              </a>
            </li>
          )
        )}
      </ul>
    </>
  )
}
