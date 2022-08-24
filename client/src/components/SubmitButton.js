import React from 'react'
import { Button } from 'react-bootstrap'
import './components.css'

const SubmitButton = ({handleSubmit}) => {
  return (
    <Button id="submitButton" type="submit" onClick={handleSubmit}>Search Recipes</Button>
  )
}

export default SubmitButton