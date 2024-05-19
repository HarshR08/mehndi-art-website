import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <h1>My Mehndi Art</h1>
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

  h1 {
    margin: 0;
  }

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

export default Navbar;