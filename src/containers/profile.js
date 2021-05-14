import React, { useContext, useEffect, useState } from 'react'
import { Header, Profile } from '../components'
import * as Routes from '../constants/routes'
import { FirebaseContext } from '../context/firebase'

export function ProfileContainer({ setProfile, setIsLoading }) {
  const { firebase } = useContext(FirebaseContext)
  const [displayName, setDisplayName] = useState('')
  const [photoURL] = useState(1)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setDisplayName(
          user.email.substr(0, user.email.indexOf('@')).split(/[.\-_]/)[0]
        )
      }
    })
  }, [firebase])

  const clickHandler = () => {
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
          <Profile.Item>
            <Profile.Picture src={photoURL} onClick={clickHandler} />
            <Profile.Name>
              {displayName &&
                displayName[0].toUpperCase() + displayName.slice(1)}
            </Profile.Name>
          </Profile.Item>
        </Profile.Items>
      </Profile>
    </>
  )
}
