import React from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'
import { Background, ButtonLink, Container, Logo } from './styles/header'

export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : <>{children}</>
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
