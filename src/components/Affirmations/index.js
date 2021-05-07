import React, { useState, useEffect, useContext } from 'react'
import CardColumns from 'react-bootstrap/CardColumns'
import AffirmationCard from './AffirmationCard'
import { AffirmationsContext } from '../../App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './affirmation.css'

function Affirmations() {
  const { affirmationsList, setAffirmationsList} = useContext(AffirmationsContext)
    useEffect(() => {
        fetch('https://affirm-vr-api.web.app/affirmations')
        .then(response => response.json())
        .then(data => setAffirmationsList(data))
        .catch(err => console.log({ err }))
    }, [])
  return (
    <CardColumns>
        {!affirmationsList ? <h2>Loading...</h2> : affirmationsList.map(one => {
            return <AffirmationCard affirmation={one} />
        })}
    </CardColumns>
  )
}

export default Affirmations 
