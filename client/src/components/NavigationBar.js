import React from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { FaInfo } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GiWheat } from 'react-icons/gi'
import {  TbMeat } from 'react-icons/tb'
import { BsEgg } from 'react-icons/bs'



const NavigationBar = ({ gluten, setGluten, meat, setMeat, vegan, setVegan }) => {

    const expand = "xl"



    return (
        <>
            <Navbar key={expand} expand={expand} className="mb-3" fixed="top" style={{ backgroundColor: "#ff7b00", boxShadow: "0px 5px 10px" }} id="navigationBar"  >
                <Container fluid >
                    <Navbar.Brand as={Link} to={"/index"} style={{ fontSize: "2.5rem", fontFamily: "'Lily Script One', cursive", color: "black" }}>Cooking</Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Options
                            </Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link className='m-1'><GiWheat size="2.5rem"  onClick={() => gluten === true ? setGluten(false) : setGluten(true)} color={ gluten === true ? "green" : "red" }  /></Nav.Link>
                                <Nav.Link className='m-1'><TbMeat size="2.5rem" onClick={() => meat === true ? setMeat(false) : (setMeat(true), setVegan(false))} color={ meat === true ? "green" : "red" }  /></Nav.Link>
                                <Nav.Link className='m-1'><BsEgg size="2.5rem" onClick={() => vegan === true ? setVegan(false) : (setVegan(true), setMeat(false)) } color={ vegan === false ? "green" : "red" }  /></Nav.Link>
                                <hr></hr>
                                <Nav.Link as={Link} to={"/about"} className='m-1' ><FaInfo size="2.5rem" color="black" /></Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar