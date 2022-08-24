import { useEffect, useState } from 'react';
import AddIngredient from '../components/AddIngredient';
import IngredientList from '../components/IngredientList';
import NavigationBar from '../components/NavigationBar';
import SubmitButton from '../components/SubmitButton';
import './App.css';

function LandingPage() {

  /* Exception of ingredients to do the filter in the recept list */
  const [lactose, setLactose] = useState(true);
  const [gluten, setGluten] = useState(true);
  const [meat, setMeat] = useState(true);
  const [vegan, setVegan] = useState(false);

  const API_KEY = process.env.REACT_APP_API_KEY;

  /*  List of ingredients that you have in your home */
  const [ingredients, setIngredients] = useState(localStorage.getItem('ingredients') !== null ? JSON.parse(localStorage.getItem('ingredients')) : []);

  // const process = 'bd8324cc1d1c4fe5b0a50eaf028b57e1';

  useEffect(() => {
    /* take the ingredients list, if they are in local storage */
    if (localStorage.getItem('ingredients') !== null) {
      setIngredients(JSON.parse(localStorage.getItem('ingredients')))
    }
  }, [])


  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour,+sugar&number=2&apiKey=${API_KEY}`);
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
    const filteredRecipe = await response.json();
    console.log(filteredRecipe);
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
