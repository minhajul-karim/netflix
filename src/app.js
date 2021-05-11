import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import * as Routes from './constants/routes'
import { Browse, Home, SignIn, SignUp } from './pages'
import { useAuthListener } from './hooks'
import { ShouldRedirect, ProtectedRoute } from './helpers/routes'
import { GlobalStyles } from './global-styles'
import { ThemeContext } from './context/themeContext'

export function App() {
  const { user } = useAuthListener()
  const { isDark } = useContext(ThemeContext)

  return (
    <>
      <GlobalStyles isDark={isDark} />
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
    </>
  )
}
