import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import header2 from "./../img/header2.webp"

const StyledNavBar = styled.div`
  text-align: left;
  padding: 30px;
  margin: 10px;
  background-image: url(${header2});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center top 50%;
  color: black;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.9);
  font-family: 'Bangers', cursive;
  font-size: 20px;
  opacity: 1;


  & h1 {
    text-align: center;
    color: black;
    font-family: 'Bangers', cursive;
    text-shadow: 2px 2px 4px rgba;
    font-size: 60px
  }

  & h1 span {
    background-color: black; 
    padding: 10px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  }

  a {
    color: black;
    margin: 1rem;
    background-color: black; 
    padding: 5px;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
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
    max-width: 100vw;
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
`;

function BasicExample() {
  const location = useLocation();

  return (
    <StyledNavBar>
      <h1><span>Lord Vader's Comic Vault</span></h1>
      <div className="link-area">
        <Link to="/">Comics</Link>
        <Link to="/pops">Pops</Link>
        <Link to="/actionfigures">Action Figures</Link>
        <Link to="/movieposters">Movie Posters</Link>
      </div>
    </StyledNavBar>
  );
}

export default BasicExample;