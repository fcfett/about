import classNames from 'classnames'

import ArrowDown from '/public/icons/arrow-down.svg'
import ChevronDown from '/public/icons/chevron-down.svg'

import RoundFrameImage from '../round-framed-image'
import styles from './styles.module.css'

const TOGGLE_ID = 'hero-toggle'

export default function Hero() {
  const firstName = 'Felipe'
  const lastName = 'Fett'
  const generalistTitle = '{ Full Stack Software Engineer }'
  const specialistText = '& Frontend Specialist'

  const breakTextToSpans = (
    text: string,
    keyPrefix: string,
    spacingClassName = 'w-[2vmin]'
  ) =>
    text.split('').map((letter, i) => {
      const isSpace = letter === ' '
      return (
        <span
          key={`${keyPrefix}-letter-${i}-${letter}`}
          className={classNames('flex flex-auto shrink-0 justify-center', {
            [spacingClassName]: isSpace,
          })}
        >
          {letter}
        </span>
      )
    })

  return (
    <>
      <input id={TOGGLE_ID} type="checkbox" className={styles['hero-toggle']} />

      <section className="relative flex w-full max-w-5xl flex-col">
        <h1 className="relative">
          <span
            className={classNames(
              styles['click-me'],
              'absolute flex flex-col items-center -top-[3vmin] right-0 font-script font-bold text-[3vmin]'
            )}
          >
            <span className="relative block -rotate-12">Click me!</span>
            <figure className="relative h-[3vmin] w-[3vmin]">
              <ArrowDown
                alt="Arrow down icon"
                className="-translate-y-1/4 -rotate-12"
              />
            </figure>
          </span>

          <label className={styles['hero-label']} htmlFor={TOGGLE_ID}>
            <span
              title={firstName}
              className={classNames(styles.name, styles['first-name'])}
            >
              {breakTextToSpans(`${firstName} `, 'first-name')}
            </span>{' '}
            <strong
              title={lastName}
              className={classNames(styles.name, styles['last-name'])}
            >
              {breakTextToSpans(lastName, 'last-name')}
            </strong>
          </label>
        </h1>

        <h2
          title={generalistTitle}
          className="flex w-full justify-between font-sans text-[3vmin] font-light uppercase"
        >
          {breakTextToSpans(generalistTitle, 'generalist-title')}
        </h2>

        <h3
          className={classNames(
            styles.specialist,
            'absolute bottom-0 right-[1.5vmin] font-script font-bold text-[5vmin] self-end -rotate-6'
          )}
        >
          {specialistText}
        </h3>
      </section>

      <RoundFrameImage
        className={classNames(styles.image)}
        alt="Fett's professional profile picture"
        src="https://raw.githubusercontent.com/fcfett/resources/master/profile.jpg"
      />

      <a
        href="#work-experience"
        className="hover-invert absolute bottom-4 pt-4"
      >
        <figure className={styles['scroll-down']}>
          <figcaption className="whitespace-pre-wrap font-sans text-xs font-bold uppercase tracking-widest">
            Scroll
          </figcaption>
          <ChevronDown width={42} height={24} alt="Chevron down icon" />
        </figure>
      </a>

      <RoundFrameImage
        alt="Boba/Jango Fett helmet"
        className={classNames(styles.image)}
        src="https://raw.githubusercontent.com/fcfett/resources/master/fett-helmet.png"
      />
    </>
  )
}
