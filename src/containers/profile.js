import React, { useContext, useEffect, useState } from 'react'
import { Header, Profile } from '../components'
import * as Routes from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { useHistory } from 'react-router-dom'

export function ProfileContainer({ setProfile, setIsLoading }) {
  const history = useHistory()
  const { firebase } = useContext(FirebaseContext)
  const [profiles, setProfiles] = useState([
    { displayName: 'Iffat', photoURL: 1 },
    { displayName: 'Moku', photoURL: 2 },
    { displayName: 'Jubayer', photoURL: 3 },
  ])

  useEffect(() => {
    let isMounted = true
    const unsubRef = firebase.auth().onAuthStateChanged((user) => {
      if (user && isMounted) {
        setProfiles((prevProfiles) => [
          ...prevProfiles,
          {
            displayName: user.email
              .substr(0, user.email.indexOf('@'))
              .split(/[.\-_]/)[0],
            photoURL: prevProfiles.length + 1,
          },
        ])
      }
    })
    return () => {
      unsubRef()
      isMounted = false
    }
  }, [firebase])

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
            <Profile.AddButton onClick={() => history.push(Routes.ADD_PROFILE)}>
              <Profile.Picture src="add" alt="Add Profile" />
            </Profile.AddButton>
          )}
        </Profile.Items>
      </Profile>
    </>
  )
}
