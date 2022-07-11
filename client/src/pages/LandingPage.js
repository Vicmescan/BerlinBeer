import { useEffect, useState } from 'react';
import AddIngredient from '../components/AddIngredient';
import IngredientList from '../components/IngredientList';
import NavigationBar from '../components/NavigationBar';
import './App.css';

function LandingPage() {

  /* Exception of ingredients to do the filter in the recept list */
  const [lactose, setLactose] = useState(true);
  const [gluten, setGluten] = useState(true);
  const [meat, setMeat] = useState(true);
  const [vegan, setVegan] = useState(false);

  /*  List of ingredients that you have in your home */
  const [ingredients, setIngredients] = useState(localStorage.getItem('ingredients') !== null ? JSON.parse(localStorage.getItem('ingredients')) : []);


  /* take the ingredients list, if they are in local storage */
  useEffect(() => {
    if(localStorage.getItem('ingredients') !== null) {
      setIngredients(JSON.parse(localStorage.getItem('ingredients')))
    }
  }, [])


  return (
    <div className="landingPage">
      <NavigationBar lactose={lactose} setLactose={setLactose} gluten={gluten} setGluten={setGluten} meat={meat} setMeat={setMeat} vegan={vegan} setVegan={setVegan} />
      <AddIngredient ingredients={ingredients} setIngredients={setIngredients} />
      <IngredientList ingredients={ingredients} />
    </div>
  );
}

export default LandingPage;
