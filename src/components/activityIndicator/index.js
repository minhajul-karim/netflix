import React from 'react'
import {
  Container,
  Picture,
  Spinner,
  SpinnerContainer,
} from './styles/activityIndicator'

export default function ActivityIndicator({ src, ...restProps }) {
  return (
    <Container {...restProps}>
      <SpinnerContainer>
        <Spinner src="/images/misc/spinner.png" />
        <Picture src={`/images/users/${src}.png`} />
      </SpinnerContainer>
    </Container>
  )
}
