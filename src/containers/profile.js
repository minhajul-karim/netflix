import React from 'react'
import { Header, Profile } from '../components'
import * as Routes from '../constants/routes'

export function ProfileContainer({ user, setProfile }) {
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
            <Profile.Picture
              src={user.photoURL}
              onClick={() => setProfile(user)}
            />
            <Profile.Name>{user.name}</Profile.Name>
          </Profile.Item>
        </Profile.Items>
      </Profile>
    </>
  )
}
