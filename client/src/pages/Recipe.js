import React from 'react'
import { useLocation } from 'react-router-dom'

const Recipe = () => {

    const location = useLocation();
    const recipe = location.state.recipe;
    console.log(recipe);

  return (
    <h1>Recipe.id = {recipe.id}</h1>
  )
}

export default Recipe