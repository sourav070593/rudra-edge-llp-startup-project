import Script from 'next/script'

export function ThemeScript() {
  return (
    <Script id="theme-script" strategy="beforeInteractive">
      {`
        try {
          const theme = localStorage.getItem('theme')
          const isDark = theme === 'dark'
          document.documentElement.classList.toggle('dark', isDark)
          document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
        } catch (e) {
          // If localStorage is unavailable, default to light mode.
        }
      `}
    </Script>
  )
}

