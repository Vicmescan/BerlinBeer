import React from 'react'
import MealCard from '../components/MealCard'
import NavigationBar from '../components/NavigationBar'
import { Container, Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import './App.css'


const RecipeList = () => {

  const location = useLocation();

  const recipes = location.state.recipes;
  console.log(recipes);

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