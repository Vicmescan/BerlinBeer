import React from 'react'
import MealCard from '../components/MealCard'
import NavigationBar from '../components/NavigationBar'
import { Container, Col } from 'react-bootstrap'
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
        {recipes.map((item) => (
          <Col><MealCard item={item} /></Col>
        ))}
      </Container>
    </div>
  )
}

export default RecipeList