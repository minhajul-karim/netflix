import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

const theme = {
  light: { background: '#fff', color: '#000' },
  dark: { background: '#000', color: '#fff' },
}

export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(false)
  const [curTheme, setCurTheme] = useState(theme.light)

  useEffect(() => {
    if (isDark) {
      setCurTheme(theme.dark)
    } else {
      setCurTheme(theme.light)
    }
  }, [isDark])

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark, curTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
