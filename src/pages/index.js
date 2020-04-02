import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import firebase from '../lib/firebase'

const db = firebase.firestore()

db.collection('scenes').where('owner', '==', 'gustavofraga').onSnapshot(function(querySnapshot) {
    const docs = []
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} =>`, doc.data())
        docs.push(doc.data())
    })
})

db
    .collection('scenes')
    .doc('RQSB757f8ADKO3LCURCU')
    .collection('frames')
    .orderBy('position')
    .get()
    .then( snap => {
        const docs = []
        snap.forEach((doc) => {
        console.log(`-------${doc.id} => `, doc.data())
        docs.push(doc.data())
     })
    })



const Index = () => {
    const [valor, setValor] = useState(0) 
    const [data, setData] = useState([])
    useEffect(() => {
        db.collection('testes').onSnapshot(function(querySnapshot) {
            const docs = []
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} =>`, doc.data())
                docs.push(doc.data())
            })
            setData(docs)
        })
    }, [])

    const increment = () => {
        setValor(valorAntigo => valorAntigo+1) 
    }
    const decrement = () => {
        setValor(valorAntigo => valorAntigo-1) 
    }
    return (
        <div>
            <h1>Página inicial {valor}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button><br></br>
            <Link to ='/d'>Ir para D</Link>
            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>
        </div>
    )
}

export default Index