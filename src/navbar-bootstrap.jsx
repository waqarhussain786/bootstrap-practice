import React from 'react';
// import { Button, Stack, Badge, Alert } from 'react-bootstrap';
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavbarBootstrap = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarBootstrap;