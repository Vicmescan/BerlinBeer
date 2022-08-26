import React from 'react'
import MealCard from '../components/MealCard'
import NavigationBar from '../components/NavigationBar'
import { Container, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import './App.css'

const RecipeList = () => {

  const location = useLocation();
  const recipes = location.state.recipes;
  const API_KEY = process.env.REACT_APP_API_KEY;

  async function clickHandler(e, id) {
    e.preventDefault();
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${API_KEY}`);
    /* if error in connect */
    if (!response.ok) {
      const message = `OPS, an error has happened: ${response.status}`;
      throw new Error(message);
    }
    /* if connect successfully */
    const recipe = await response.json();
    window.open(recipe.sourceUrl, '_blank');    
  }

  return (
    <div className='recipeList'>
      <NavigationBar noDisplay={true} />
      <Container fluid id="recipeListContainer" >
        {recipes.map((item, index) => (
          <Col key={index} onClick={(e)=>clickHandler(e, item.id)}><MealCard item={item} /></Col>
        ))}
      </Container>
    </div>
  )
}

export default RecipeList