import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import { TiDelete } from 'react-icons/ti'
import DeleteModal from './DeleteModal'


const IngredientList = ({ ingredients, setIngredients }) => {

    const [modalShow, setModalShow] = useState(false);
    const [index, setIndex] = useState(0);

    const deleteIngredient = (ingredientIndex) => {
        setIndex(ingredientIndex)
        setModalShow(true);
    }

    return (
        <>
            <Card id="ingredientList">
                <Card.Body>
                    <Card.Title id="title" >Ingredients in your home</Card.Title>
                    <Card.Text>
                        {ingredients.map((ingredient, index) => {
                            return <li className='ingredient' key={index}>- {ingredient} <TiDelete style={{color: "red", cursor: "pointer" }} onClick={() => deleteIngredient(index)} /> </li>
                        }
                        )}
                    </Card.Text>
                </Card.Body>
            </Card>
            <DeleteModal show={modalShow} onHide={() => setModalShow(false)} ingredients={ingredients} setIngredients={setIngredients} index={index} />
        </>
    )
}

export default IngredientList