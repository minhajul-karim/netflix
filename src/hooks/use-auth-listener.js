import { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../context/firebase'

export default function useAuthListener() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('user', JSON.stringify(user))
        setUser(user)
      } else {
        localStorage.removeItem('user')
        setUser(null)
      }
    })
    return () => unsubscribe()
  }, [firebase])

  return { user }
}
