import React from 'react'
import MealCard from '../components/MealCard'
import NavigationBar from '../components/NavigationBar'
import { Container, Col } from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom'
import './App.css'

const RecipeList = () => {

  const location = useLocation();
  const recipes = location.state.recipes;
  const navigate = useNavigate();
  console.log(recipes);

  const clickHandler = (e, id) => {
    e.preventDefault();
    navigate(`/recipe/${id}`, { state: { recipe: recipes.find(recipe => recipe.id === id) } });
    console.log(id);
  }

  return (
    <div className='recipeList'>
      <NavigationBar noDisplay={true} />
      <Container fluid id="recipeListContainer" >
        {recipes.map((item, index) => (
          <Col key={index} onClick={(e)=>clickHandler(e, item.id)} ><MealCard item={item} /></Col>
        ))}
      </Container>
    </div>
  )
}

export default RecipeList