import { useEffect, useState, useRef } from "react"
import { db } from '../firebase/config'
import { collection, query, onSnapshot } from "firebase/firestore"

export const useCollection = (collectionName 
    //,_query, 
    //_orderBy
) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  // if we don't use a ref --> infinite loop in useEffect
  // _query is an array and is "different" on every function call
  // const query = useRef(_query).current
  // const orderBy = useRef(_orderBy).current

  useEffect(() => {
    // let ref = projectFirestore.collection(collectionName)
    let q = query(collection(db, collectionName))

    // if (query) {
    //   ref = ref.where(...query)
    // }
    // if (orderBy) {
    //   ref = ref.orderBy(...orderBy)
    // }

    const unsubscribe = onSnapshot(q, snapshot => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({...doc.data(), id: doc.id})
      });
      
      // update state
      setDocuments(results)
      setError(null)
    }, error => {
      console.log(error)
      setError('could not fetch the data')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [collectionName
    //, query, 
    //orderBy
    ])

  return { documents, error }
}