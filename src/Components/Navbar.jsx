import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from "react-router-dom";
const Navbarme = () => {
    const [navCollapsed, setnavCollapsed] = useState(true);
    function _onToggleNav() {
        setnavCollapsed(!navCollapsed)
    }
    const [activeuser, setactiveuser] = useState(false)
    useEffect(() => async () => {
        const tokken = localStorage.getItem(`token`);
        if (tokken) {
            setactiveuser(true)
        }
    })
    return (
        <>
            <Navbar className="navbar sticky-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand ><Link className={`nav-link`} to={`home`} > React-Bootstrap </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link ><NavLink to={`users`} className={`nav-link`} > Users </NavLink></Nav.Link>
                            <NavDropdown title="Dropdown" className='nav-link' id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {activeuser === false ? (
                                <>
                                    <Nav.Link ><NavLink to={`login`} className={`nav-link`} > Signin </NavLink></Nav.Link>
                                    <Nav.Link eventKey={2} >
                                        <NavLink to={`SignUp`} className={`nav-link`} > Signup </NavLink>
                                    </Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link ><NavLink to={`dashboard`} className={`nav-link`} > Dashboard </NavLink></Nav.Link>
                                    <Nav.Link eventKey={2} >
                                        <NavLink to={`logout`} className={`nav-link`} > Logout </NavLink>
                                    </Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default Navbarme;