import React from 'react'
import MealCard from '../components/MealCard'
import NavigationBar from '../components/NavigationBar'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'

const RecipeList = () => {
  return (
    <div className='recipeList'>
      <NavigationBar />
      <Container fluid id="recipeListContainer" >
      <Row>
          <Col><MealCard /></Col>
          <Col><MealCard /></Col>
          <Col><MealCard /></Col>
        </Row>
        <Row>
          <Col><MealCard /></Col>
          <Col><MealCard /></Col>
          <Col><MealCard /></Col>
        </Row>
        <Row>
          <Col><MealCard /></Col>
          <Col><MealCard /></Col>
          <Col><MealCard /></Col>
        </Row>
      </Container>
    </div>
  )
}

export default RecipeList