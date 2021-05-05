import { useEffect, useState, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'

export default function useContent(target) {
  const [content, setContent] = useState([])
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((querySnapshot) => {
        const allContent = querySnapshot.docs.map((obj) => ({
          ...obj.data(),
          id: obj.id,
        }))
        setContent(allContent)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [firebase, target])

  return { [target]: content }
}
