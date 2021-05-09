import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SignInForm } from '../components'
import * as Routes from '../constants/routes'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { FirebaseContext } from '../context/firebase'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const isFormValid = email && password ? true : false
  const { firebase } = useContext(FirebaseContext)
  const history = useHistory()

  function submitHandler(event) {
    event.preventDefault()
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push(Routes.BROWSE)
      })
      .catch((err) => {
        // @TODO: Handle err properly
        console.log(err)
        setError(err.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <SignInForm>
          <SignInForm.Title>Sign In</SignInForm.Title>
          <SignInForm.Form
            action="/something"
            method="POST"
            onSubmit={submitHandler}
          >
            {error && <SignInForm.Error>{error}</SignInForm.Error>}
            <SignInForm.Input
              type="text"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <SignInForm.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <SignInForm.Button disabled={!isFormValid}>
              Sign In
            </SignInForm.Button>
          </SignInForm.Form>
          <SignInForm.RememberMeContainer>
            <SignInForm.Label>
              <SignInForm.Input type="checkbox" />
              <SignInForm.SmallText color="bright">
                Remember me
              </SignInForm.SmallText>
            </SignInForm.Label>
            <SignInForm.Link to="/help" size="small" color="#b3b3b3">
              Need help?
            </SignInForm.Link>
          </SignInForm.RememberMeContainer>
          <SignInForm.Text>
            New to Netflix?{' '}
            <SignInForm.Link to={Routes.SIGN_UP} color="#fff">
              Sign up now.
            </SignInForm.Link>
          </SignInForm.Text>
          <SignInForm.SmallText>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{' '}
            <SignInForm.Link to="#" color="#0071eb">
              Learn more.
            </SignInForm.Link>
          </SignInForm.SmallText>
        </SignInForm>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
