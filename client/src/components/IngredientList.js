import React from 'react'
import { Card, Button } from 'react-bootstrap'

const IngredientList = ({ ingredients }) => {
    return (
        <>
            <Card style={{ width: '18rem', height: "50vh", opacity: "0.8" }}>
                <Card.Body>
                    <Card.Title>Ingredients in your home</Card.Title>
                    <Card.Text>
                        {ingredients.map((ingredient, index) => {
                            return <li key={index}>{ingredient}</li>
                        }
                        )}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Button type="submit" style={{backgroundColor: "#ff7b00", border: "gray", color:"black", opacity:"1", zIndex:"1", margin: "-3rem 0 2rem 0" }} >Search Recept</Button>
        </>
    )
}

export default IngredientList