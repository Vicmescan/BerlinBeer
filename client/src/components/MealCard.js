import React from 'react'
import { Card } from 'react-bootstrap'
import changüi from './changüi.jpg'
import './components.css'

const MealCard = () => {
  return (
    <div className='mealCard'>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={changüi} />
        <Card.Body>
          <h4 style={{ textAlign:"center" } } >Banana Changüi</h4>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MealCard