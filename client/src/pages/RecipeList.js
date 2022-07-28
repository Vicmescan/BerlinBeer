import React from 'react'
import MealCard from '../components/MealCard'
import NavigationBar from '../components/NavigationBar'
import { Container, Row, Col } from 'react-bootstrap'
import './App.css'

const RecipeList = () => {
  return (
    <div className='recipeList'>
      <NavigationBar />
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={{ span: 3 }}><MealCard /></Col>
          <Col md={{ span: 3 }}><MealCard /></Col>
          <Col md={{ span: 3 }}><MealCard /></Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={{ span: 3 }}><MealCard /></Col>
          <Col md={{ span: 3 }}><MealCard /></Col>
          <Col md={{ span: 3 }}><MealCard /></Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={{ span: 3 }}><MealCard /></Col>
          <Col md={{ span: 3 }}><MealCard /></Col>
          <Col md={{ span: 3 }}><MealCard /></Col>
        </Row>
      </Container>
    </div>
  )
}

export default RecipeList