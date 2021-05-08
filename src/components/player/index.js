import React, { useState, useContext, createContext } from 'react'
import ReactDOM from 'react-dom'
import { Container, Overlay, Inner, Button, CloseButton } from './styles/player'

const PlayerContext = createContext()

export default function Player({ children, ...restProps }) {
  const [showPlayer, setShowPlayer] = useState(false)

  return (
    <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function PlayerVideo({ ...restProps }) {
  const { showPlayer, setShowPlayer } = useContext(PlayerContext)

  return (
    showPlayer &&
    ReactDOM.createPortal(
      <Overlay onClick={() => setShowPlayer(false)}>
        <Inner>
          <video id="netflix-player" controls>
            <source src="/videos/bunny.mp4" type="video/mp4" />
          </video>
          <CloseButton />
        </Inner>
      </Overlay>,
      document.body
    )
  )
}

Player.Button = function PlayerButton({ ...restProps }) {
  const { setShowPlayer } = useContext(PlayerContext)

  return (
    <Button
      {...restProps}
      onClick={() => setShowPlayer((prevState) => !prevState)}
    >
      Play
    </Button>
  )
}
