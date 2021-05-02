import React, { createContext, useContext, useState } from 'react'
import {
  Body,
  Container,
  Frame,
  Header,
  Inner,
  Item,
  Title,
} from './styles/accordion'

const toggleContext = createContext()

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  )
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame>{children}</Frame>
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title>{children}</Title>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false)

  return (
    <toggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item>{children}</Item>
    </toggleContext.Provider>
  )
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(toggleContext)
  return (
    <Header onClick={() => setToggleShow(!toggleShow)}>
      {children}
      {toggleShow ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  )
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(toggleContext)

  return toggleShow && <Body>{children}</Body>
}
