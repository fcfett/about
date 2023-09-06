import { DateTime } from 'luxon'

import adp from '/public/companies/adp.jpg'
import agi from '/public/companies/agi.jpg'
import lol from '/public/companies/lol.jpg'
import ls from '/public/companies/ls.jpg'
import nt from '/public/companies/nt.jpg'
import stefanini from '/public/companies/stefanini.jpg'
import vg8 from '/public/companies/vg8.jpg'
import PdfDownload from '/public/icons/pdf-download.svg'
import RoundFrameImage from '@/components/round-framed-image'

const WORKING_EXPERIENCES = [
  {
    company: 'Legends Of Learning',
    startDate: '2022-01-09',
    endDate: '2023-05-09',
    url: 'https://www.linkedin.com/company/legends-of-learning/',
    image: lol,
  },
  {
    company: 'Agi',
    startDate: '2021-01-01',
    url: 'https://www.linkedin.com/company/agibank/',
    image: agi,
  },
  {
    url: 'https://www.linkedin.com/company/adpbrazillabs/',
    company: 'ADP Brazil Labs',
    startDate: '2020-03-01',
    image: adp,
  },
  {
    url: 'https://www.linkedin.com/company/vg8/',
    company: 'VG8',
    startDate: '2019-05-01',
    image: vg8,
  },
  {
    url: 'https://www.linkedin.com/company/grupols/',
    company: 'Grupo L&S',
    startDate: '2017-06-01',
    image: ls,
  },
  {
    url: 'https://www.linkedin.com/company/stefanini-brasil',
    company: 'Stefanini / Dell',
    startDate: '2015-09-01',
    image: stefanini,
  },
  {
    url: 'https://www.linkedin.com/company/ntconsult',
    company: 'NTConsult',
    startDate: '2011-05-01',
    image: nt,
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
      <h1 className="flex flex-wrap items-end gap-2 font-serif text-4xl font-black uppercase">
        Work Experience
        <a
          className="hover-invert inline-block"
          target="_blank"
          href="https://fcfett.github.io/resources/fcfett-resume.pdf"
          rel="noreferrer"
        >
          <PdfDownload className="h-7" />
        </a>
      </h1>
      <ul className="m-auto flex flex-wrap justify-center gap-4 lg:max-w-4xl 2xl:max-w-full">
        {WORKING_EXPERIENCES_BY_DATE_ASC.map(
          ({ startDate, endDate, company, url, image }) => (
            <li key={startDate}>
              <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className="link relative flex flex-col items-center text-center"
              >
                <RoundFrameImage src={image} alt={`${company}'s logo`} />
                <h2 className="hidden font-serif font-bold lg:block">
                  {company}
                </h2>
                <small className="font-sans font-normal">
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
          <figure className="flex h-[25vmin] max-h-[12rem] items-center justify-center overflow-hidden rounded-full border-[0.6vmin] border-dashed border-current font-sans text-[15vmin] font-black">
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
