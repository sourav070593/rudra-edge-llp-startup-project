import Script from 'next/script'

export function ThemeScript() {
  return (
    <Script id="theme-script" strategy="beforeInteractive">
      {`
        try {
          const theme = localStorage.getItem('theme') || 'dark'
          const isDark = theme === 'dark'
          document.documentElement.classList.toggle('dark', isDark)
          document.documentElement.style.colorScheme = isDark ? 'dark' : 'light'
        } catch (e) {
          // If localStorage is unavailable, default to dark mode.
          document.documentElement.classList.add('dark')
          document.documentElement.style.colorScheme = 'dark'
        }
      `}
    </Script>
  )
}

