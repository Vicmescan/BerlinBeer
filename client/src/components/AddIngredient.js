import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import './components.css'

const AddIngredient = ({ ingredients, setIngredients }) => {


  const [newIngredient, setNewIngredient] = useState("");

  const handleSubmit = () => {
    if (newIngredient !== "") {
      setIngredients([...ingredients, newIngredient])
      setNewIngredient('')
    }
  }

  /* add ingredients to the ingredients list in localStorage */
  useEffect(() => {
    localStorage.setItem('ingredients', JSON.stringify(ingredients))
  }, [ingredients])


  return (
    <div className='addIngredients' >
      <Form.Control size="sm" type="text" placeholder='Introduce an ingredient' value={newIngredient} style={{ opacity: "0.8", zIndex: "1" }} onChange={(e) => setNewIngredient(e.target.value)} />
      <Button id="addButton" type="submit" onClick={handleSubmit} onSubmit={handleSubmit}>Add</Button>
    </div>
  )
}

export default AddIngredient