import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as Routes from './constants/routes'
import { Browse, Home, SignIn, SignUp } from './pages'

export function App() {
  return (
    <Router>
      <Switch>
        <Route path={Routes.SIGN_IN}>
          <SignIn />
        </Route>
        <Route path={Routes.SIGN_UP}>
          <SignUp />
        </Route>
        <Route path={Routes.BROWSE}>
          <Browse />
        </Route>
        <Route path={Routes.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
