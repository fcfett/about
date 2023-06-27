import { DateTime } from 'luxon'

import PdfDownload from '/public/icons/pdf-download.svg'
import RoundFrameImage from '@/components/round-framed-image'

const WORKING_EXPERIENCES = [
  {
    company: 'Legends Of Learning',
    startDate: '2022-01-09',
    endDate: '2023-05-09',
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

const getDateString = (dateISO: string) =>
  DateTime.fromISO(dateISO).toLocaleString({
    month: 'short',
    year: 'numeric',
  })

export default function Career() {
  return (
    <>
      <h1 className="flex font-serif text-4xl font-black uppercase">
        Work Experience
        <a
          className="hover-invert ml-2 inline-block"
          target="_blank"
          href="https://fcfett.github.io/resources/fcfett-resume.pdf"
          rel="noreferrer"
        >
          <PdfDownload className="h-7" />
        </a>
      </h1>
      <ul className="my-auto flex flex-wrap justify-center gap-4">
        {WORKING_EXPERIENCES_BY_DATE_ASC.map(
          ({ startDate, endDate, company, url, imageUrl }) => (
            <li key={startDate}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="link relative flex flex-col items-center text-center"
              >
                <RoundFrameImage src={imageUrl} alt={`${company}'s logo`} />
                <h2 className="hidden font-serif font-bold lg:block">
                  {company}
                </h2>
                <small>
                  {getDateString(startDate)}
                  {endDate && (
                    <>
                      {' '}
                      <span className="hidden sm:inline">&ndash;</span>
                      <br className="block sm:hidden" />{' '}
                      {getDateString(endDate)}
                    </>
                  )}
                </small>
              </a>
            </li>
          )
        )}
        <li className="w-[25vmin] max-w-[12rem] text-center">
          <figure className="flex h-[25vmin] max-h-[12rem] items-center justify-center overflow-hidden rounded-full border-[0.6vmin] border-dashed border-current text-[15vmin] font-black">
            ?
          </figure>
          <h2 className="font-serif text-sm font-bold leading-tight lg:text-base">
            What comes next?
          </h2>
        </li>
      </ul>
    </>
  )
}
