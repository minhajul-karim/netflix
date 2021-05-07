import React, { useState } from 'react'
import { Link as ReachRouterLink } from 'react-router-dom'
import {
  Background,
  ButtonLink,
  Container,
  Dropdown,
  Feature,
  FeatureCallOut,
  Group,
  Link,
  Logo,
  Picture,
  PlayButton,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  Text,
} from './styles/header'

export default function Header({
  bg = true,
  border = true,
  children,
  ...restProps
}) {
  return bg ? (
    <Background border={border} {...restProps}>
      {children}
    </Background>
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

Header.SearchBar = function HeaderSearchBar({
  searchTerm,
  setSearchTerm,
  ...restProps
}) {
  const [isInputActive, setIsInputActive] = useState(false)

  return (
    <Search>
      <SearchIcon onClick={() => setIsInputActive((prevState) => !prevState)}>
        <img src="/images/icons/search.png" alt="Search" />
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder="search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        active={isInputActive}
      />
    </Search>
  )
}

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>
}

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture src={`/images/users/${src}.png`} {...restProps} />
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
