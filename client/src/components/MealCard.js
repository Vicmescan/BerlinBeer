import React from 'react'
import { Card } from 'react-bootstrap'
import changüi from './changüi.jpg'
import './components.css'

const MealCard = ({item}) => {
  return (
      <Card style={{ width: '18rem', boxShadow: "7px 7px 10px", cursor: "pointer", margin: "1rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body style={{backgroundColor: "#ff7b00" }} >
          <h4 style={{ textAlign:"center" } } >{item.title}</h4>
        </Card.Body>
      </Card>
  )
}

export default MealCard