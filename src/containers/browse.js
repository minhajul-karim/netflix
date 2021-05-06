import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Header, Card } from '../components'
import * as Routes from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { FooterContainer } from './footer'
import { ProfileContainer } from './profile'

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({})
  const [category, setCategory] = useState('series')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [slideRows, setSlideRows] = useState([])
  const { firebase } = useContext(FirebaseContext)

  const user = {
    displayName: 'Rizon',
    photoURL: '2',
  }

  useEffect(() => {
    setSlideRows(slides[category])
  }, [category, slides])

  return profile.displayName ? (
    isLoading ? (
      <ActivityIndicator src={user.photoURL} />
    ) : (
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
              connection as he walks the streets of Gotham City. Arthur wears
              two masks -- the one he paints for his day job as a clown, and the
              guise he projects in a futile attempt to feel like he's part of
              the world around him.
            </Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>

        <Card.Group>
          {slideRows.map((item) => (
            <Card key={`${category}-${item.title.toLowerCase()}`}>
              <Card.Title>{item.title}</Card.Title>
              <Card.Entities>
                {item.data.map((cardItem) => (
                  <Card.Item key={cardItem.id} item={cardItem}>
                    <Card.Image
                      src={`/images/${category}/${cardItem.genre}/${cardItem.slug}/small.jpg`}
                    />
                    <Card.Meta>
                      <Card.SubTitle>{cardItem.title}</Card.SubTitle>
                      <Card.Text>{cardItem.text}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Entities>
              <Card.Feature category={category} />
            </Card>
          ))}
        </Card.Group>
        <FooterContainer />
      </>
    )
  ) : (
    <ProfileContainer
      user={user}
      setProfile={setProfile}
      setIsLoading={setIsLoading}
    />
  )
}
