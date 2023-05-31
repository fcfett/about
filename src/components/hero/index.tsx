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
              'absolute flex flex-col items-center -top-[3vmin] right-0 font-script text-[3vmin]'
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
            'absolute bottom-0 right-[1.5vmin] font-script text-[5vmin] self-end -rotate-6'
          )}
        >
          {specialistText}
        </h3>
      </section>

      <RoundFrameImage
        src="https://raw.githubusercontent.com/fcfett/resources/master/profile.jpg"
        alt="Fett's professional profile picture"
        className={classNames(styles.image)}
      />

      <a href="#work-experience" className="absolute bottom-0 pt-4">
        <figure
          className={classNames(
            styles['scroll-down'],
            'flex flex-col items-center text-center'
          )}
        >
          <figcaption className="whitespace-pre-wrap text-xs font-bold uppercase tracking-widest">
            Scroll
          </figcaption>
          <ChevronDown
            width={42}
            height={42}
            alt="Chevron down icon"
            className="-translate-y-2"
          />
        </figure>
      </a>

      <RoundFrameImage
        alt="Boba/Jango Fett helmet"
        src="https://raw.githubusercontent.com/fcfett/resources/master/fett-helmet.png"
        className={classNames(styles.image)}
      />
    </>
  )
}
