'use client'
import classNames from 'classnames'
import { useState } from 'react'

import MoonIcon from '/public/icons/moon.svg'
import SunIcon from '/public/icons/sun.svg'

import styles from './styles.module.css'

const THEME_KEY = 'theme'
const THEME_TRANSITION_DURATION_MS = 750

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
      const theme = localStorage?.getItem(THEME_KEY)

      const isDarkThemeEnabled = theme
        ? theme === 'dark'
        : window?.matchMedia('(prefers-color-scheme: dark)').matches

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
          style={{ animationDuration: `${THEME_TRANSITION_DURATION_MS}ms` }}
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
