import React from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'
import {
  Background,
  ButtonLink,
  Container,
  Feature,
  FeatureCallOut,
  Group,
  Link,
  Logo,
  PlayButton,
  Text,
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

Header.Link = function HeaderLink({ children, ...restProps }) {
  return <Link {...restProps}>{children}</Link>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureCallOut = function HeaderFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>
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
