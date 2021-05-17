import React, { useState } from 'react'
import { Form, Profile } from '../components'
import { useHistory } from 'react-router-dom'

export default function AddProfile() {
  const [displayName, setDisplayName] = useState('')
  const history = useHistory()

  const continueHandler = (event) => {
    event.preventDefault()
    // Get the current profiles from localstorage
    const currentProfilesStr = window.localStorage.getItem('profiles')
    const currentProfiles = JSON.parse(currentProfilesStr)
    // Save new profile to localstorage
    if (currentProfiles) {
      const profilesArr = [
        ...currentProfiles,
        { displayName: displayName, photoURL: currentProfiles.length + 1 },
      ]
      window.localStorage.setItem('profiles', JSON.stringify(profilesArr))
    } else {
      const profilesArr = [{ displayName: displayName, photoURL: 1 }]
      window.localStorage.setItem('profiles', JSON.stringify(profilesArr))
    }
    history.goBack()
  }

  // Go back to prev route
  const cancelHandler = (event) => {
    event.preventDefault()
    history.goBack()
  }

  return (
    <Form.Base maxWidth="500px" marginTop="100px">
      <Form.Title>Add Profile</Form.Title>
      <Form.Text>Add a profile for another person watching Netflix.</Form.Text>
      <Form.FlexContainer justifyContent="flex-start" flexDirection="column">
        <Profile.Item>
          <Profile.Picture src="1" alt="Profile image" />
        </Profile.Item>
        <Form.Input
          type="text"
          placeholder="Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
      </Form.FlexContainer>
      <Form.HorizontalRule />
      <Form.FlexContainer
        justifyContent="flex-start"
        justifyContentSmall="center"
      >
        <Form.Button
          marginRight="20px"
          background="#e50914"
          disabled={displayName.length > 0 ? false : true}
          onClick={continueHandler}
        >
          CONTINUE
        </Form.Button>
        <Form.Button border="1px" onClick={cancelHandler}>
          CANCEL
        </Form.Button>
      </Form.FlexContainer>
    </Form.Base>
  )
}
