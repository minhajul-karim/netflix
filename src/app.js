import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import * as Routes from './constants/routes'
import { Browse, Home, SignIn, SignUp } from './pages'
import { useAuthListener, useTheme } from './hooks'
import { ShouldRedirect, ProtectedRoute } from './helpers/routes'
import { GlobalStyles } from './global-styles'
import { ThemeProvider } from 'styled-components'

export function App() {
  const { user } = useAuthListener()
  // const { theme } = useTheme()
  // console.log(theme)
  const theme = JSON.parse(window.localStorage.getItem('theme'))
  console.log(theme)

  return (
    <ThemeProvider theme={{ background: '#000', color: '#fff' }}>
      <GlobalStyles />
      <Router>
        <Switch>
          <ShouldRedirect
            user={user}
            path={Routes.SIGN_IN}
            pathAfterLogIn={Routes.BROWSE}
          >
            <SignIn />
          </ShouldRedirect>
          <ShouldRedirect
            user={user}
            path={Routes.SIGN_UP}
            pathAfterLogIn={Routes.BROWSE}
          >
            <SignUp />
          </ShouldRedirect>
          <ProtectedRoute user={user} path={Routes.BROWSE}>
            <Browse />
          </ProtectedRoute>
          <ShouldRedirect
            user={user}
            path={Routes.HOME}
            pathAfterLogIn={Routes.BROWSE}
          >
            <Home />
          </ShouldRedirect>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}
