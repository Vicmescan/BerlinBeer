import { useState } from 'react';
import NavigationBar from '../components/NavigationBar';
import './App.css';

function LandingPage() {

  const [lactose, setLactose] = useState(true);
  const [gluten, setGluten] = useState(true)
  const [meat, setMeat] = useState(true)
  const [vegan, setVegan] = useState(false)


  return (
    <div className="landingPage">
      <NavigationBar lactose={lactose} setLactose={setLactose} gluten={gluten} setGluten={setGluten} meat={meat} setMeat={setMeat} vegan={vegan} setVegan={setVegan} />
    </div>
  );
}

export default LandingPage;
