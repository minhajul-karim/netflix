import React from 'react'
import { Header, Profile } from '../components'
import * as Routes from '../constants/routes'

export function ProfileContainer({ user, setProfile, setIsLoading }) {
  const clickHandler = () => {
    setProfile(user)
    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={Routes.HOME}
            src="/images/misc/logo.svg"
            alt="Netflix"
          />
        </Header.Frame>
      </Header>
      <Profile>
        <Profile.Title>Who's watching?</Profile.Title>
        <Profile.Items>
          <Profile.Item>
            <Profile.Picture src={user.photoURL} onClick={clickHandler} />
            <Profile.Name>{user.displayName}</Profile.Name>
          </Profile.Item>
        </Profile.Items>
      </Profile>
    </>
  )
}
