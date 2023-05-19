import classNames from 'classnames'
import Image from 'next/image'

import styles from './styles.module.css'

const TOGGLE_ID = 'hero-toggle'

export default function Hero() {
  const firstName = 'Felipe'
  const lastName = 'Fett'
  const generalistTitle = '{ Full Stack Software Engineer }'
  const specialistText = '& Fontend Specialist'

  const breakTextToSpans = (text: string, keyPrefix: string) =>
    text
      .split('')
      .map((letter, i) => (
        <span key={`${keyPrefix}-letter-${i}-${letter}`}>{letter}</span>
      ))

  return (
    <>
      <input id={TOGGLE_ID} type="checkbox" className={styles['hero-toggle']} />

      <section className="relative flex flex-col w-full">
        <h1>
          <label className="flex" htmlFor={TOGGLE_ID}>
            <span className={classNames(styles.name, styles['first-name'])}>
              {breakTextToSpans(firstName, 'first-name')}
            </span>{' '}
            <strong className={classNames(styles.name, 'font-bold uppercase')}>
              {breakTextToSpans(lastName, 'last-name')}
            </strong>
          </label>
        </h1>

        <h2 className="flex w-full uppercase justify-around text-[3.5vmin] px-[1.6em]">
          {breakTextToSpans(generalistTitle, 'generalist-title')}
        </h2>

        <h3>{specialistText}</h3>
      </section>

      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />

      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
    </>
  )
}
