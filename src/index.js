import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'
import { FirebaseContext } from './context/firebase'
import { GlobalStyles } from './global-styles'

const config = {
  apiKey: 'AIzaSyDsmKdPD0_m429fFXvtUrv423W1-Ad_5Bs',
  authDomain: 'netflix-mk-7169d.firebaseapp.com',
  databaseURL:
    'https://netflix-mk-7169d-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'netflix-mk-7169d',
  storageBucket: 'netflix-mk-7169d.appspot.com',
  messagingSenderId: '841431528855',
  appId: '1:841431528855:web:5cf69ec5aa99b1c20080d2',
}

const firebase = window.firebase.initializeApp(config)

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
)
