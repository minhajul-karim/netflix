import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export function ShouldRedirect({
  user,
  path,
  pathAfterSignIn,
  children,
  ...restProps
}) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (user) {
          return <Redirect to={{ pathname: pathAfterSignIn }} />
        } else {
          return children
        }
      }}
    />
  )
}

export function ProtectedRoute({ user, children, ...restProps }) {
  return (
    <Route
      {...restProps}
      render={() => {
        if (user) {
          // go to browse
          return children
        } else {
          // go to sign in
          return <Redirect to={{ pathname: 'signin' }} />
        }
      }}
    />
  )
}
