const THEME_KEY = 'theme'
const storedTheme = localStorage?.getItem(THEME_KEY)
const isDarkThemeEnabled =
  storedTheme === 'dark' ||
  (!(THEME_KEY in localStorage) &&
    window?.matchMedia('(prefers-color-scheme: dark)').matches)

document.documentElement.classList.toggle('dark', isDarkThemeEnabled)
