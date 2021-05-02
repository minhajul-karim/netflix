import React, { useState } from 'react'
import { SignInForm } from '../components'
import * as Routes from '../constants/routes'
import { HeaderContainer } from '../containers/header'

export default function SignIn() {
  const [error] = useState(false)

  return (
    <HeaderContainer>
      <SignInForm>
        <SignInForm.Title>Sign In</SignInForm.Title>
        <SignInForm.Input type="text" placeholder="Email or phone number" />
        {error && (
          <SignInForm.Error>
            Please enter a valid email or phone number.
          </SignInForm.Error>
        )}
        <SignInForm.Input type="password" placeholder="Password" />
        {error && (
          <SignInForm.Error>
            Your password must contain between 4 and 60 characters.
          </SignInForm.Error>
        )}
        <SignInForm.Button>Sign In</SignInForm.Button>
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
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
          <SignInForm.Link to="#" color="#0071eb">
            Learn more.
          </SignInForm.Link>
        </SignInForm.SmallText>
      </SignInForm>
    </HeaderContainer>
  )
}
