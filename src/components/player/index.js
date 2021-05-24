import React, { useState, useContext, createContext, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Container, Overlay, Inner, Button, CloseButton } from './styles/player'

const PlayerContext = createContext()

export default function Player({
  children,
  hasClickedPlayBtn,
  setHasClickedPlayBtn,
  ...restProps
}) {
  const [showPlayer, setShowPlayer] = useState(false)

  useEffect(() => {
    setShowPlayer(hasClickedPlayBtn)
  }, [hasClickedPlayBtn])

  return (
    <PlayerContext.Provider
      value={{ showPlayer, setShowPlayer, setHasClickedPlayBtn }}
    >
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  )
}

Player.Video = function PlayerVideo({ ...restProps }) {
  const { showPlayer, setShowPlayer, setHasClickedPlayBtn } =
    useContext(PlayerContext)

  return showPlayer
    ? ReactDOM.createPortal(
        <Overlay
          onClick={() => {
            setShowPlayer(false)
            setHasClickedPlayBtn && setHasClickedPlayBtn(false)
          }}
        >
          <Inner>
            <video id="netflix-player" controls>
              <source src="/videos/bunny.mp4" type="video/mp4" />
            </video>
            <CloseButton />
          </Inner>
        </Overlay>,
        document.body
      )
    : null
}

Player.Button = function PlayerButton({ ...restProps }) {
  const { setShowPlayer } = useContext(PlayerContext)

  return (
    <Button {...restProps} onClick={() => setShowPlayer(true)}>
      Play
    </Button>
  )
}
