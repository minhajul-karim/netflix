import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { SignInForm } from '../components'
import * as Routes from '../constants/routes'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { FirebaseContext } from '../context/firebase'

export default function SignUp() {
  const [error, setError] = useState('')
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { firebase } = useContext(FirebaseContext)
  const isFormValid = firstName && email && password ? true : false
  const history = useHistory()

  function submitHandler(event) {
    event.preventDefault()
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        userCredential.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(Routes.BROWSE)
          })
      })
      .catch((err) => {
        // @TODO: Handle error
        console.log(err)
        setError(err.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <SignInForm>
          <SignInForm.Title>Sign Up</SignInForm.Title>
          <SignInForm.Form
            action={Routes.BROWSE}
            method="POST"
            onSubmit={submitHandler}
          >
            {error && <SignInForm.Error>{error}</SignInForm.Error>}
            <SignInForm.Input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
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
              Sign Up
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
            Already a user?{' '}
            <SignInForm.Link to={Routes.SIGN_IN} color="#fff">
              Sign in now.
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
