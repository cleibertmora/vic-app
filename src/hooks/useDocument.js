import { useEffect, useState } from 'react'
import { db } from '../firebase/config'
import { doc, getDoc, updateDoc } from "firebase/firestore"

export const useDocument = (collectionName, docId) => {
    const [docInfo, setDocInfo] = useState(null)
    const [error, setError] = useState(null)
    const [isCancelled, setIsCancelled] = useState(false)
    
    const handleQuery = async () => {
        const docRef = doc(db, collectionName, docId)

        try {
            const res = await getDoc(docRef)
            setDocInfo({...res.data(), id: res.id})
        } catch (error) {
            console.log(error)
            setError('could not fetch the doc')
        }
    }

    const updateDocInfo = async (payload) => {
        const docRef = doc(db, collectionName, docId)
        
        try {
            await updateDoc(docRef, payload)
            setError(null)
        } catch (error) {
            console.log(error)
            setError('could not update the doc')
        }
    }

    useEffect(() => {
        handleQuery()

        return () => {
            setIsCancelled(true)
            setDocInfo(null)
        }
    }, [collectionName, docId])

    return { docInfo, error, isCancelled, updateDocInfo }
}