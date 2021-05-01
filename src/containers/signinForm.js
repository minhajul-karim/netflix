import React from 'react'
import { SignInForm } from '../components'

export function SignInFormContaner() {
  return (
    <SignInForm>
      <SignInForm.Title>Sign In</SignInForm.Title>
      <SignInForm.Input type="text" placeholder="Email or phone number" />
      <SignInForm.Text>Please enter a valid email or phone number.</SignInForm.Text>
      <SignInForm.Input type="password" placeholder="Password" />
      <SignInForm.Text>Your password must contain between 4 and 60 characters.</SignInForm.Text>
      <SignInForm.Button>Sign In</SignInForm.Button>
      <SignInForm.RememberMeContainer>
        <SignInForm.Label>
          <SignInForm.Input type="checkbox" />
          Remember me
        </SignInForm.Label>
        <SignInForm.Link to="#">Need help?</SignInForm.Link>
      </SignInForm.RememberMeContainer>
      <SignInForm.Text>
        New to Netflix? <SignInForm.Link to="/signin">Sign up now.</SignInForm.Link>
      </SignInForm.Text>
      <SignInForm.Text>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.{' '}
        <SignInForm.Link to="#">Learn more.</SignInForm.Link>
      </SignInForm.Text>
    </SignInForm>
  )
}
