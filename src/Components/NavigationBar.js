// NavigationBar.js
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';
import { DarkModeProvider } from './DarkModeContext';
import { useDarkMode } from './DarkModeContext';


function NavigationBar() {
  const history = useNavigate();
  const { toggleDarkMode } = useDarkMode();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to a search results page with the search query as a parameter
    history(`/search?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <DarkModeProvider>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">SofaLex</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '50px' }} navbarScroll>
              <Nav.Link onClick={() => history('/PIUG/')}>Home</Nav.Link>
              <Nav.Link onClick={() => history('/PIUG/about')}>Contact</Nav.Link>
              <Nav.Link onClick={() => history('/PIUG/catalog')}>Catalog</Nav.Link>
              <Button>
                <DarkModeToggle />
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </DarkModeProvider>
  );
}

export default NavigationBar;
