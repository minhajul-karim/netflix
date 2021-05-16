import { createContext, useEffect, useState } from 'react'
import * as themes from '../theme/schema.json'

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(true)
  const [curTheme, setCurTheme] = useState(themes.default.data.light)
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    if (isDark) {
      setCurTheme(themes.default.data.dark)
    } else {
      setCurTheme(themes.default.data.light)
    }
  }, [isDark])

  return (
    <ThemeContext.Provider
      value={{ isDark, setIsDark, curTheme, profiles, setProfiles }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
