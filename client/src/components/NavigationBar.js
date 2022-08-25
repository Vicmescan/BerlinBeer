import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FaInfo } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GiWheat } from 'react-icons/gi'
import { TbMeat, TbMilk } from 'react-icons/tb'
import { BsEgg } from 'react-icons/bs'
import './components.css'



const NavigationBar = ({ lactose, setLactose, gluten, setGluten, meat, setMeat, vegan, setVegan, noDisplay }) => {



    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: "#ff7b00", boxShadow: "0px 5px 10px", width: "100%" }}>
                <Container className="p-0">
                    <Navbar.Brand as={Link} to={"/index"} style={{ fontSize: "3rem", fontFamily: "'Lily Script One', cursive", color: "black" }}>Cooking</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end"  >
                        <Nav>
                            {noDisplay === true ? null :
                                <>
                                    <Nav.Link id="gluten" ><GiWheat size="2.5rem" onClick={() => gluten === true ? setGluten(false) : setGluten(true)} color={gluten === true ? "green" : "red"} /> {gluten === true ? <p>With gluten</p> : <p>Gluten nope</p>} </Nav.Link>
                                    <Nav.Link id="lactose" ><TbMilk size="2.5rem" onClick={() => lactose === true ? setLactose(false) : (setLactose(true), setVegan(false))} color={lactose === true ? "green" : "red"} /> {lactose === true ? <p>With lactose</p> : <p>Lactose nope</p>} </Nav.Link>
                                    <Nav.Link id="meat" ><TbMeat size="2.5rem" onClick={() => meat === true ? setMeat(false) : (setMeat(true), setVegan(false))} color={meat === true ? "green" : "red"} /> {meat === true ? <p>With Meat</p> : <p>Meat nope</p>} </Nav.Link>
                                    <Nav.Link id="vegan" ><BsEgg size="2.5rem" onClick={() => vegan === true ? setVegan(false) : (setVegan(true), setMeat(false), setLactose(false))} color={vegan === true ? "green" : "red"} /> {vegan === true ? <p>Go vegan</p> : <p>No vegan</p>} </Nav.Link>
                                    <hr></hr>
                                </>}
                            <Nav.Link id="info" as={Link} to={"/about"} ><FaInfo size="2.5rem" color="black" /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar