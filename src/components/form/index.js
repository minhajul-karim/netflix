import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Error,
  Input,
  Label,
  RememberMeContainer,
  SmallText,
  Text,
  Title
} from './styles/form'

export default function SignInForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

SignInForm.Title = function SignInFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

SignInForm.Input = function SignInFormTitle({ ...restProps }) {
  return <Input {...restProps} />
}

// <Input type="password" placeholder="some text" />

SignInForm.Button = function SignInFormTitle({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}

SignInForm.RememberMeContainer = function SignInFormRememberMeContainer({
  children,
  ...restProps
}) {
  return <RememberMeContainer {...restProps}>{children}</RememberMeContainer>
}

SignInForm.Label = function SignInFormTitle({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>
}

SignInForm.Text = function SignInFormTitle({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

SignInForm.SmallText = function SignInFormSmallText({ children, ...restProps }) {
  return <SmallText {...restProps}>{children}</SmallText>
}

SignInForm.Error = function SignInFormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>
}

SignInForm.Link = function SignInFormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}
