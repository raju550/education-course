import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">All Course</Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#home">Details Course</Nav.Link>  
                </Nav>
                </Container>
            </Navbar>
        </>
        
    );
};

export default Header;