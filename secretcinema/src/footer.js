import React from 'react';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import FormControl from 'react-bootstrap/FormControl';

class Navigation extends React.Component {

    render() {
        return (
            <div>
                <Navbar fixed="bottom" bg="light" expand="lg">
                    <Navbar.Brand href="/">Secret Cinema</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="./screens">Screens</Nav.Link>
                            <Nav.Link href="./about">About Us</Nav.Link>
                            <Nav.Link href="./contact">Contact Us</Nav.Link>
                            <Nav.Link href="./classifications">Classifications</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;