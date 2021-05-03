import React, { useState } from 'react'
import { Header } from '../components'
import * as Routes from '../constants/routes'
import { FooterContainer } from './footer'
import { ProfileContainer } from './profile'

export function BrowseContainer() {
  const [profile, setProfile] = useState({})
  const [category, setCategory] = useState('series')

  const user = {
    displayName: 'Rizon',
    photoURL: '2',
  }

  return profile.displayName ? (
    <>
      <Header src="joker1">
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={Routes.HOME}
              src="/images/misc/logo.svg"
              alt="logo"
            />
            <Header.Link
              active={category === 'series' ? true : false}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.Link>
            <Header.Link
              active={category === 'films' ? true : false}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.Link>
          </Header.Group>
        </Header.Frame>
      </Header>
      <FooterContainer />
    </>
  ) : (
    <ProfileContainer user={user} setProfile={setProfile} />
  )
}
