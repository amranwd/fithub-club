import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    <h1 className="d-inline-block fw-bold mt-2 align-top color-green">FitHuB</h1>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav className="fithub-menu">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/registration">Registration</Nav.Link>
                        {user.email ? <button onClick
                            ={logOut} className="logout-btn">Logout</button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    </Nav>
                    {user.email && <Navbar.Text>
                        <span className="color-green">Signed in as:</span> <span style={{ color: 'white' }}>{user.displayName}</span>
                    </Navbar.Text>}
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default Header;