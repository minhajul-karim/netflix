import React, { useEffect, useState } from 'react'
import { Header, Profile } from '../components'
import * as Routes from '../constants/routes'
import { useHistory } from 'react-router-dom'

export function ProfileContainer({ setProfile, setIsLoading }) {
  const history = useHistory()
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const profilesStr = window.localStorage.getItem('profiles')
    if (profilesStr) {
      setProfiles(JSON.parse(profilesStr))
    }
  }, [])

  const clickHandler = (displayName, photoURL) => {
    setProfile({ displayName, photoURL })
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
          {profiles.map((profile) => (
            <Profile.Item key={`${profile.displayName}-${profile.photoURL}`}>
              <Profile.Picture
                src={profile.photoURL}
                onClick={() =>
                  clickHandler(profile.displayName, profile.photoURL)
                }
              />
              <Profile.Name>
                {profile.displayName[0].toUpperCase() +
                  profile.displayName.slice(1)}
              </Profile.Name>
            </Profile.Item>
          ))}
          {profiles.length < 5 && (
            <Profile.AddButton
              onClick={() => {
                history.push({
                  pathname: Routes.ADD_PROFILE,
                })
              }}
            >
              <Profile.Picture src="add" alt="Add Profile" />
            </Profile.AddButton>
          )}
        </Profile.Items>
      </Profile>
    </>
  )
}
