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
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/">Secret Cinema</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Films" id="basic-nav-dropdown">
                                <NavDropdown.Item href="./releases">New Releases</NavDropdown.Item>
                                <NavDropdown.Item href="./showing">Currently Showing</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="./screens">Screens</Nav.Link>
                            <Nav.Link href="./opentimes">Opening Times</Nav.Link>
                            <Nav.Link href="./ticketBookings">BOOK NOW</Nav.Link>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search Term" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigation;