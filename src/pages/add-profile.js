import React from 'react'
import { Form, Profile } from '../components'

export default function AddProfile() {
  return (
    <Form.Base maxWidth="500px" marginTop="100px">
      <Form.Title>Add Profile</Form.Title>
      <Form.Text>App a profile for another person watching Netflix.</Form.Text>
      <Form.FlexContainer justifyContent="flex-start" flexDirection="column">
        <Profile.Item>
          <Profile.Picture src="1" alt="Profile image" />
        </Profile.Item>
        <Form.Input type="text" placeholder="Name" />
      </Form.FlexContainer>
      <Form.HorizontalRule />
      <Form.FlexContainer justifyContent="flex-start">
        <Form.Button marginRight="20px" background="#e50914">
          CONTINUE
        </Form.Button>
        <Form.Button border="1px">CANCEL</Form.Button>
      </Form.FlexContainer>
    </Form.Base>
  )
}
