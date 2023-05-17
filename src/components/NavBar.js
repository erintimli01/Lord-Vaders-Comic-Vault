import React from 'react';
import Container from 'react-bootstrap/Container';
// import "./navbar.css";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components";

const StyledNavBar = styled.div`
  background-color: #f8f9fa; 
  width: 100vw;
  max-width:100vw;
  align-items: center;

  & h1 {
    text-align: center;
  }
  & h2 {
    text-align: center;

  }

  a {
    color: black;
    margin: 1rem;
  }
  a:hover {
    color: #007bff;
  }
  
  .link-area {
    text-align: center;
  }

.navbar-brand {
  color: #000;
  font-weight: bold;
  width: 100%;
}
.navbar-brand:hover {
  color: #007bff;
}

.navbar {
  background-color: #f8f9fa;
  width: 100vw;
  max-width:100vw;
  & h1 {
    text-align: center;
  }
  & h2 {
    text-align: left;
    align-items: center;

  }
}

.navbar-text {
  margin-right: 10px;
}

.nav-link {
  color: #000;
}
.nav-link:hover {
  color: #007bff;
  text-decoration: underline;
}
`

function BasicExample() {
  const location = useLocation();

  // const getPageName = () => {
  //   const segments = location.pathname.split('/');
  //   return segments[segments.length - 1];
  // };

  return (
    <StyledNavBar>
{/* <Navbar bg="light" expand="lg">
  <Container> */}
    {/* <Navbar.Brand as={Link} to="/" className="navbar-brand">
      Lord Vader's Comic Vault
    </Navbar.Brand> */}

    <h1>Lord Vader's Comic Vault</h1>
    <div className="link-area">
      <Link to="/">Comics</Link>
      <Link to="/pops">Pops</Link>
      <Link to="/actionfigures">Action Figures</Link>
    </div>

    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav"> */}
      {/* <Nav className="me-auto"> */}
            {/* <Nav.Link as={Link} to="/">Home</Nav.Link>
            <br></br> */}
            {/* <Nav.Link as={Link} to="comics">Comics</Nav.Link>
            <br></br>
            <Nav.Link as={Link} to="pops">Pops</Nav.Link>
            <br></br>
            <Nav.Link as={Link} to="action">Action Figures</Nav.Link>
          </Nav> */}
        {/* </Navbar.Collapse> */}
      {/* </Container>
    </Navbar> */}
    </StyledNavBar>
  );
}

export default BasicExample;