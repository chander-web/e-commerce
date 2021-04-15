import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
const Header = () => {
    return (
        <>
            <header>
                <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                    <Container>
                        <Navbar.Brand>
                            <Link to="/">Proshop</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link>
                                    <Link to="/"><i className="fas fa-home"></i>&nbsp;Home</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/category"><i className="fas fa-list-alt"></i>&nbsp;Category</Link>
                                </Nav.Link>
                                <Nav.Link>
                                    <Link to="/product">
                                        <i className="fas fa-cart-plus"></i>&nbsp;Products
                                    </Link>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Header
