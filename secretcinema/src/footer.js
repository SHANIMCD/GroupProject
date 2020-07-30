import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {

    render() {
        return (
            <div>
                <Navbar fixed="bottom" bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/">Go Back Home</Nav.Link>
                            <Nav.Link href="/aboutUs">About Us</Nav.Link>
                            {/* <Nav.Link href="/contactUs">Contact Us</Nav.Link> */}
                            <Nav.Link href="/filmClassification">Classifications</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Footer;