import classNames from 'classnames'

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
        <h1>
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
          className="flex w-full justify-between px-[8vmin] font-sans text-[3vmin] font-light uppercase"
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

      <RoundFrameImage
        alt="Boba/Jango Fett helmet"
        src="https://raw.githubusercontent.com/fcfett/resources/master/fett-helmet.png"
        className={classNames(styles.image)}
      />
    </>
  )
}
