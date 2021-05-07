import React from 'react'
import './affirmation.css'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'


function AffirmationsCard({ affirmation }) {
  return (
    <Card style={{ width: '18rem' }} className='card-display'>
      <Card.Body>
        <Card.Text className='text-center'>
          {affirmation.text}
        </Card.Text>
        <Card.Title className="text-right">{affirmation.displayName}<Image src={affirmation.photoUrl} roundedCircle /></Card.Title>
      </Card.Body>
    </Card>
  )
}

export default AffirmationsCard
