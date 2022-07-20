import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import './components.css'

const DeleteModal = (props) => {

    const deleteButton = () => {
        const tempList = [...props.ingredients]
        tempList.splice(props.index, 1)
        props.setIngredients([...tempList])
        props.onHide()
    }

    return (
        <Modal
            id="deleteModal"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Body closeButton>
                <h2>One Moment!</h2>
                <p className='modalParagraph' > Are you sure you want to delete the ingredient "{props.ingredients[props.index]}" ?</p>
            </Modal.Body>
            <Modal.Footer>
                <Button id="modalCloseButton" onClick={props.onHide}>Close</Button>
                <Button id="modalDeleteButton" onClick={deleteButton}>Delete</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteModal