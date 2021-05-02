import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as Routes from './constants/routes'
import { Home, SignIn } from './pages'

export function App() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.SIGN_IN}>
          <SignIn />
        </Route>
        <Route path={Routes.SIGN_UP}>
          <p>I will be the sign up page</p>
        </Route>
        <Route path={Routes.BROWSE}>
          <p>I will be the browse page</p>
        </Route>
        <Route path={Routes.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
