import { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { doc, getDoc } from "firebase/firestore"

export const useDocument = (collectionName, docId) => {
    const [document, setDocument] = useState(null)
    const [error, setError] = useState(null)
    const [isCancelled, setIsCancelled] = useState(false)

    useEffect(() => {
        const docRef = doc(db, collectionName, docId);
        
        try {
            const docInfo = await getDoc(docRef);
            setDocument({...docInfo.data(), id: docInfo.id})
        } catch (error) {
            console.log(error)
            setError('could not fetch the doc')
        }

        return () => setIsCancelled(true)
    }, [collectionName, docId])

    return { document, error, isCancelled }
}