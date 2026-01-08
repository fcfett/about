import classNames from 'classnames'

import ArrowDown from '../../../public/icons/arrow-down.svg'

import RoundFrameImage from '../round-framed-image'
import FocusableAnchor from './focusable-anchor'
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
      <section className="relative flex w-full max-w-screen-xl flex-col px-[7.5vmin]">
        <h1 className="relative">
          <span className="absolute right-0 top-[-3vmin] flex animate-click-me flex-col items-center font-script text-[3vmin] font-bold">
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

      <aside className={classNames(styles.image, styles.left)}>
        <FocusableAnchor href="#social" className="rotate-3">
          Follow me!
        </FocusableAnchor>
        <RoundFrameImage
          alt="Fett's professional profile picture"
          src="https://raw.githubusercontent.com/fcfett/resources/master/profile.jpg"
        />
      </aside>

      <aside className={classNames(styles.image, styles.right)}>
        <FocusableAnchor
          target="_blank"
          rel="noreferrer"
          href="https://calendly.com/fcfett/chat-with-fett"
          className="-rotate-12"
        >
          Hire me!
        </FocusableAnchor>
        <RoundFrameImage
          alt="Boba/Jango Fett helmet"
          src="https://raw.githubusercontent.com/fcfett/resources/master/fett-helmet.png"
        />
      </aside>
    </>
  )
}
