'use client'

import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import MoonIcon from '/public/icons/moon.svg'
import SunIcon from '/public/icons/sun.svg'

type Props = HTMLAttributes<HTMLInputElement>

const THEME_KEY = 'theme'

export default function ThemeSwitcher({ className }: Props) {
  const toggleTheme = () => {
    const theme = localStorage?.getItem(THEME_KEY)

    const isDarkThemeEnabled = theme
      ? theme === 'dark'
      : window?.matchMedia('(prefers-color-scheme: dark)').matches

    document.documentElement.classList.toggle('dark', !isDarkThemeEnabled)
    localStorage.setItem(THEME_KEY, !isDarkThemeEnabled ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggleTheme}
      className={twMerge(
        classNames(
          'flex flex-col items-center justify-center w-10 h-10 transition-colors bg-current rounded-full',
          className
        )
      )}
    >
      <MoonIcon
        width={24}
        height={24}
        alt="Moon icon"
        className="absolute block fill-[rgb(var(--background-rgb))] transition-transform dark:scale-0"
      />
      <SunIcon
        width={28}
        height={28}
        alt="Sun icon"
        className="absolute block scale-0 fill-[rgb(var(--background-rgb))] transition-transform dark:scale-100"
      />
    </button>
  )
}
