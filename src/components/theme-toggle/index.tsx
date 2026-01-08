'use client'

import classNames from 'classnames'
import { useState } from 'react'

import MoonIcon from '../../../public/icons/moon.svg'
import SunIcon from '../../../public/icons/sun.svg'
import {
  MEDIA_DARK,
  THEME_KEY,
  THEME_TRANSITION_DURATION_MS,
} from '@/scripts/set-theme-script'

import styles from './styles.module.css'

export default function ThemeSwitcher() {
  const [isThemeInTransition, setIsThemeInTransition] = useState<boolean>(false)

  const triggerBackdropTransition = () => {
    setIsThemeInTransition(true)
    setTimeout(() => {
      setIsThemeInTransition(false)
    }, THEME_TRANSITION_DURATION_MS)
  }

  const toggleTheme = () => {
    if (!isThemeInTransition) {
      const storedTheme = localStorage?.getItem(THEME_KEY)
      const isDarkThemeEnabled = storedTheme
        ? storedTheme === 'dark'
        : window?.matchMedia(MEDIA_DARK).matches

      document.documentElement.classList.toggle('dark', !isDarkThemeEnabled)
      localStorage.setItem(THEME_KEY, !isDarkThemeEnabled ? 'dark' : 'light')
      triggerBackdropTransition()
    }
  }

  return (
    <>
      {isThemeInTransition && (
        <figure
          className={styles.backdrop}
          style={{
            animationDuration: `${THEME_TRANSITION_DURATION_MS}ms`,
          }}
        />
      )}

      <button
        onClick={toggleTheme}
        className={styles.button}
        disabled={isThemeInTransition}
      >
        <MoonIcon
          width={24}
          height={24}
          alt="Moon icon"
          className={classNames(styles.icon, 'dark:scale-0')}
        />
        <SunIcon
          width={28}
          height={28}
          alt="Sun icon"
          className={classNames(styles.icon, 'scale-0 dark:scale-100')}
        />
      </button>
    </>
  )
}
