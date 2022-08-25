import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddIngredient from '../components/AddIngredient';
import IngredientList from '../components/IngredientList';
import NavigationBar from '../components/NavigationBar';
import SubmitButton from '../components/SubmitButton';
import './App.css';


function LandingPage() {

  const navigate = useNavigate();

  /* Exception of ingredients to do the filter in the recept list */
  const [lactose, setLactose] = useState(true);
  const [gluten, setGluten] = useState(true);
  const [meat, setMeat] = useState(true);
  const [vegan, setVegan] = useState(false);

  /* API Secret Key, I hope */
  const API_KEY = process.env.REACT_APP_API_KEY;

  /*  List of ingredients that you have in your home */
  const [ingredients, setIngredients] = useState(localStorage.getItem('ingredients') !== null ? JSON.parse(localStorage.getItem('ingredients')) : []);

  useEffect(() => {
    /* take the ingredients list, if they are in local storage */
    if (localStorage.getItem('ingredients') !== null) {
      setIngredients(JSON.parse(localStorage.getItem('ingredients')))
    }
  }, [])

  /* Submit button function */
  async function handleSubmit(e) {
    e.preventDefault();
    const ingredientsLow = ingredients.map(ingredient => ingredient.toLowerCase()).toString().replaceAll(',', '+');
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsLow}&apiKey=${API_KEY}`);
    /* if error in connect */
    if (!response.ok) {
      const message = `OPS, an error has happened: ${response.status}`;
      throw new Error(message);
    }
    /* if connect successfully */
    const filteredRecipe = await response.json();
    navigate('/recipes', { state: { recipes: filteredRecipe } });
  }



  return (
    <div className="landingPage">
      <NavigationBar lactose={lactose} setLactose={setLactose} gluten={gluten} setGluten={setGluten} meat={meat} setMeat={setMeat} vegan={vegan} setVegan={setVegan} />
      <AddIngredient ingredients={ingredients} setIngredients={setIngredients} />
      <IngredientList ingredients={ingredients} setIngredients={setIngredients} />
      <SubmitButton handleSubmit={handleSubmit} />
    </div>
  );
}

export default LandingPage;
