import React, { useState } from 'react'
import { FooterContainer } from './footer'
import { ProfileContainer } from './profile'

export function BrowseContainer() {
  const [profile, setProfile] = useState({})

  const user = {
    displayName: 'Rizon',
    photoURL: '2',
  }

  return profile.displayName ? (
    <>
      <p>Browse container</p>
      <FooterContainer />
    </>
  ) : (
    <ProfileContainer user={user} setProfile={setProfile} />
  )
}
