import React from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'
import {
  Background,
  ButtonLink,
  Container,
  Group,
  Link,
  Logo,
  TextLink,
} from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? (
    <Background {...restProps}>{children}</Background>
  ) : (
    <>{children}</>
  )
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReachRouterLink to={to}>
      <Logo {...restProps} />
    </ReachRouterLink>
  )
}

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>
}

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}>{children}</TextLink>
}

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

/*
 * Another implementation of ButtonLink assuming we have a styled component called SigninButton
 * Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
    return (
      <ReachRouterLink to={to}>
        <SigninButton {...restProps}>{children}</SigninButton>
      </ReachRouterLink>
    )
  }
 */
