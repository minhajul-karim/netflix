import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, Header, Card, Player } from '../components'
import * as Routes from '../constants/routes'
import { FirebaseContext } from '../context/firebase'
import { FooterContainer } from './footer'
import { ProfileContainer } from './profile'
import Fuse from 'fuse.js'
import { useTheme } from '../hooks'

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({})
  const [category, setCategory] = useState('series')
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [slideRows, setSlideRows] = useState([])
  const [feature, setFeature] = useState({})
  const [shouldDisplayFeature, setShouldDisplayFeature] = useState(false)
  const [displayFeatureIndex, setDisplayFeatureIndex] = useState(null)
  const { firebase } = useContext(FirebaseContext)
  const { isDark, setIsDark } = useTheme()

  const user = {
    displayName: 'Rizon',
    photoURL: '2',
  }

  useEffect(() => {
    setSlideRows(slides[category])
  }, [category, slides])

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ['data.description', 'data.slug', 'data.title'],
    })
    const results = fuse.search(searchTerm).map(({ item }) => item)
    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results)
    } else {
      setSlideRows(slides[category])
    }
  }, [searchTerm])

  return profile.displayName ? (
    isLoading ? (
      <ActivityIndicator src={user.photoURL} />
    ) : (
      <>
        <Header src="joker1" darken={true} border={false}>
          <Header.Frame>
            {/* Left side of header */}
            <Header.Group directionCol={true}>
              <Header.Logo to={Routes.HOME} setSmallLogo={true} />
              <Header.Group shouldAbsolute={true}>
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
            </Header.Group>

            {/* Right side of header */}
            <Header.Group>
              <Header.SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <Header.ThemeButton
                onClick={() => setIsDark((prevMode) => !prevMode)}
              >
                {isDark ? '☀️' : '🌙'}
              </Header.ThemeButton>
              <Header.Profile>
                <Header.Picture src={user.photoURL} />
                <Header.Dropdown>
                  <Header.Group justifyContent="space-between">
                    <Header.Picture src={user.photoURL} />
                    <Header.Link>{user.displayName}</Header.Link>
                  </Header.Group>
                  <Header.Group justifyContent="space-between">
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
          {slideRows.map((item, index) => (
            <Card key={`${category}-${item.title.toLowerCase()}`}>
              <Card.Title>{item.title}</Card.Title>
              <Card.Entities>
                {item.data.map((cardItem) => (
                  <Card.Item
                    key={cardItem.id}
                    item={cardItem}
                    onClick={() => {
                      setFeature(cardItem)
                      setShouldDisplayFeature(true)
                      setDisplayFeatureIndex(index)
                    }}
                  >
                    <Card.Image
                      src={`/images/${category}/${cardItem.genre}/${cardItem.slug}/small.jpg`}
                    />
                    <Card.Meta>
                      <Card.SubTitle>{cardItem.title}</Card.SubTitle>
                      <Card.Text>{cardItem.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Entities>
              {shouldDisplayFeature && index === displayFeatureIndex && (
                <Card.Feature
                  category={category}
                  feature={feature}
                  setShouldDisplayFeature={setShouldDisplayFeature}
                >
                  <Player>
                    <Player.Button />
                    <Player.Video />
                  </Player>
                </Card.Feature>
              )}
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
