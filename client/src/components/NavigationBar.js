import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { MdLanguage } from 'react-icons/md'
import { FaInfo } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const NavigationBar = () => {


    return (
        <>
            <Navbar fixed="top" style={{ backgroundColor: "#ff7b00" }} variant="dark">
                <Container>
                    <Navbar.Brand href="#home" style={{ fontSize: "2.5rem", fontFamily: " 'Lily Script One', cursive" }}>Cooking</Navbar.Brand>
                    <Nav className="justify-content-end" >
                        <NavDropdown className='m-1' title={<MdLanguage size="2.5rem" color='white' />} id="nav-dropdown" >
                            <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Español</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link as={Link} to={"/about"} className='m-1' ><FaInfo size="2.5rem" color='white' /></Nav.Link>
                    </Nav> 
                </Container>
            </Navbar>
        </>
    )
}

export default NavigationBar