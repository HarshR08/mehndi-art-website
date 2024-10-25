import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
      <HeaderText>Deetya's Mehndi Art</HeaderText>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 1rem 2rem;

  ul {
    list-style: none;
    display: flex;
    margin: 0;

    li {
      margin-left: 2rem;

      a {
        color: white;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s;

        &:hover {
          color: #ff6b6b;
        }
      }
    }
  }
`;

const Logo = styled.img`
  width: 50px; /* Adjust size as needed */
  height: 50px; /* Adjust size as needed */
`;

const HeaderText = styled.h1`
  margin: 0;
`;

export default Navbar;