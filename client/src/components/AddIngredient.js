import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const AddIngredient = ({ ingredients, setIngredients }) => {


  const [newIngredient, setNewIngredient] = useState("");

  const handleSubmit = () => {
    setIngredients([...ingredients, newIngredient])
    setNewIngredient('')
  }

  /* add ingredients to the ingredients list in localStorage */
  useEffect(() => {
    localStorage.setItem('ingredients', JSON.stringify(ingredients))
  }, [ingredients])



  console.log(ingredients);


  return (
    <div className='addIngredients' >
     <Form.Control size="sm" type="text" placeholder='Introduce an ingredient' value={newIngredient} style={{opacity: "0.8", zIndex:"1"}} onChange={ (e) => setNewIngredient(e.target.value) } />
     <Button type="submit" onClick={handleSubmit} onSubmit={handleSubmit} style={{backgroundColor: "#ff7b00", border: "gray", color:"black" }}>Add</Button>
    </div>
  )
}

export default AddIngredient