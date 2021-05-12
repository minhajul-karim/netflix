import { useEffect, useState } from 'react'

const theme = {
  light: { background: '#fff', color: '#000' },
  dark: { background: '#000', color: '#fff' },
}

export default function useTheme() {
  const [isDark, setIsDark] = useState(false)
  const [curTheme, setCurTheme] = useState(theme.light)

  useEffect(() => {
    if (isDark) {
      setCurTheme(theme.dark)
      window.localStorage.setItem('theme', JSON.stringify(theme.dark))
    } else {
      setCurTheme(theme.light)
      window.localStorage.setItem('theme', JSON.stringify(theme.light))
    }
  }, [isDark])

  return { curTheme, isDark, setIsDark }
}
