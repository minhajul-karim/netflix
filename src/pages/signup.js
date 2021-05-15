import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form } from '../components'
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
        console.log(err)
        setError(err.message)
      })
  }

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          <Form.Base method="POST" onSubmit={submitHandler}>
            {error && <Form.Error>{error}</Form.Error>}
            <Form.Input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Input
              type="text"
              placeholder="Email or phone number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Button disabled={!isFormValid}>Sign Up</Form.Button>
          </Form.Base>
          <Form.RememberMeContainer>
            <Form.Label>
              <Form.Input type="checkbox" />
              <Form.SmallText color="bright">Remember me</Form.SmallText>
            </Form.Label>
            <Form.Link to="/help" size="small" color="#b3b3b3">
              Need help?
            </Form.Link>
          </Form.RememberMeContainer>
          <Form.Text>
            Already a user?{' '}
            <Form.Link to={Routes.SIGN_IN} color="#fff">
              Sign in now.
            </Form.Link>
          </Form.Text>
          <Form.SmallText>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{' '}
            <Form.Link to="#" color="#0071eb">
              Learn more.
            </Form.Link>
          </Form.SmallText>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
