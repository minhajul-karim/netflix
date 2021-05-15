import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import * as Routes from './constants/routes'
import { Browse, Home, SignIn, SignUp, AddProfile } from './pages'
import { useAuthListener } from './hooks'
import { ShouldRedirect, ProtectedRoute } from './helpers/routes'

export function App() {
  const { user } = useAuthListener()

  return (
    <>
      <Router>
        <Switch>
          <ShouldRedirect
            user={user}
            path={Routes.SIGN_IN}
            pathAfterSignIn={Routes.BROWSE}
          >
            <SignIn />
          </ShouldRedirect>
          <ShouldRedirect
            user={user}
            path={Routes.SIGN_UP}
            pathAfterSignIn={Routes.BROWSE}
          >
            <SignUp />
          </ShouldRedirect>
          <ProtectedRoute user={user} path={Routes.BROWSE}>
            <Browse />
          </ProtectedRoute>
          <ProtectedRoute user={user} path={Routes.ADD_PROFILE}>
            <AddProfile />
          </ProtectedRoute>
          <ShouldRedirect
            user={user}
            path={Routes.HOME}
            pathAfterSignIn={Routes.BROWSE}
          >
            <Home />
          </ShouldRedirect>
        </Switch>
      </Router>
    </>
  )
}
