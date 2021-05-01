import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import * as Routes from './constants/routes'
import Home from './pages/home'
import SignIn from './pages/signin'

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
          {/* <p>I am going to be a cloned Netflix application</p> */}
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}
