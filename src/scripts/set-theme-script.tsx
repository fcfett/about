import Script from 'next/script'

export const THEME_KEY = 'theme'
export const THEME_TRANSITION_DURATION_MS = 750
export const MEDIA_DARK = '(prefers-color-scheme: dark)'

export default function SetThemeScript() {
  return (
    <Script id="set-theme-script" strategy="lazyOnload">
      {`const storedTheme = localStorage?.getItem('${THEME_KEY}'); const isDarkThemeEnabled = storedTheme === 'dark' || (!('${THEME_KEY}' in localStorage) && window?.matchMedia('${MEDIA_DARK}').matches); document.documentElement.classList.toggle('dark', isDarkThemeEnabled);`}
    </Script>
  )
}
