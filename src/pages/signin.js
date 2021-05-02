import React, { useState } from 'react'
import { SignInForm } from '../components'
import * as Routes from '../constants/routes'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'

export default function SignIn() {
  const [emailErr, setEmailErr] = useState(false)
  const [passwordErr, setPasswordErr] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isFormValid = email && password ? true : false
  console.log(isFormValid)

  function isValid() {
    let hasErr = false
    if (!email) {
      console.log('Invalid email')
      setEmailErr(true)
      hasErr = true
    }
    if (!password) {
      console.log('Invalid password')
      setPasswordErr(true)
      hasErr = true
    }
    return !hasErr
  }

  function submitHandler(event) {
    event.preventDefault()
    console.log('Form submitted')
    console.log(isValid())
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
            <SignInForm.Input
              type="text"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailErr && (
              <SignInForm.Error>
                Please enter a valid email or phone number.
              </SignInForm.Error>
            )}
            <SignInForm.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordErr && (
              <SignInForm.Error>
                Your password must contain between 4 and 60 characters.
              </SignInForm.Error>
            )}
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
            <SignInForm.Link to={Routes.SIGN_IN} color="#fff">
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
