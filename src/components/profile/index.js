import React from 'react'
import {
  Container,
  Item,
  Items,
  Name,
  Picture,
  Title,
  AddButton,
} from './styles/profile'

export default function Profile({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>
}

Profile.Title = function ProfileTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>
}

Profile.Items = function ProfileItems({ children, ...restProps }) {
  return <Items {...restProps}>{children}</Items>
}

Profile.Picture = function ProfilePicture({ src, ...restProps }) {
  return (
    <Picture
      src={src ? `/images/users/${src}.png` : '/images/misc/loading.gif'}
      {...restProps}
    />
  )
}

Profile.Name = function ProfileName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>
}

Profile.Item = function ProfileItems({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>
}

Profile.AddButton = function ProfileAddButton({ children, ...restProps }) {
  return <AddButton {...restProps}>{children}</AddButton>
}
