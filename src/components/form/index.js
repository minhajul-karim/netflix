import React from 'react'
import {
  Button,
  Container,
  Error,
  Base,
  Input,
  Label,
  Link,
  FlexContainer,
  SmallText,
  Text,
  Title,
  HorizontalRule,
} from './styles/form'

export default function Form({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Form.Base = function FormBase({ children, ...restProps }) {
  return <Base {...restProps}>{children}</Base>
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Form.Input = function FormInput({ ...restProps }) {
  return <Input {...restProps} />
}

Form.Button = function FormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>
}

Form.FlexContainer = function FormRememberMeContainer({
  children,
  ...restProps
}) {
  return <FlexContainer {...restProps}>{children}</FlexContainer>
}

Form.Label = function FormLabel({ children, ...restProps }) {
  return <Label {...restProps}>{children}</Label>
}

Form.Text = function FormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
}

Form.SmallText = function FormSmallText({ children, ...restProps }) {
  return <SmallText {...restProps}>{children}</SmallText>
}

Form.Error = function FormError({ children, ...restProps }) {
  return <Error {...restProps}>{children}</Error>
}

Form.Link = function FormLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Form.HorizontalRule = function FormHorizontalRule({ ...restProps }) {
  return <HorizontalRule {...restProps} />
}
