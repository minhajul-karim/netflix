import React, { useContext, useState } from 'react'
import { Header } from '../components'
import * as Routes from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { FooterContainer } from './footer'
import { ProfileContainer } from './profile'

export function BrowseContainer() {
  const [profile, setProfile] = useState({})
  const [category, setCategory] = useState('series')
  const [searchTerm, setSearchTerm] = useState('')
  const { firebase } = useContext(FirebaseContext)

  const user = {
    displayName: 'Rizon',
    photoURL: '2',
  }

  return profile.displayName ? (
    <>
      <Header src="joker1" darken={true}>
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
          <Header.Group>
            <Header.SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.Link>{user.displayName}</Header.Link>
                </Header.Group>
                <Header.Group>
                  <Header.Link onClick={() => firebase.auth().signOut()}>
                    Sign Out
                  </Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCallOut>Watch Joker Now</Header.FeatureCallOut>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <FooterContainer />
    </>
  ) : (
    <ProfileContainer user={user} setProfile={setProfile} />
  )
}
