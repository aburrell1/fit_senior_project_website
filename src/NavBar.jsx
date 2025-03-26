import React from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';

// const Container = styled.section`
//   width: 100%;
//   display: flex;
// //   flex-direction: column;
//   align-items: center;
//   position: sticky;F
// `;

// Styled Components
const Navbar = styled.nav`
  background-color:rgb(255, 255, 255); 
  color: white;
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  position: sticky;

  top: 0;
  z-index: 1000;
  padding: 15px 30px; 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3); 
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 25px;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: rgb(95, 2, 0);
  font-size: 16px;
  letter-spacing: 1.5px; 
  font-weight: 500; 
  text-transform: uppercase;
  transition: color 0.2s;

  &:hover {
    color:rgb(214, 4, 0); 
  }
`;

const HomeLink = styled(NavLink)`
  font-size: 20px; 
  font-weight: bold; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);

  &:hover {
    color:rgb(95, 10, 0); 
  }
`;

const LogoWrapper = styled.div`
  font-size: 24px;
  font-weight: bold;
  letter-spacing: 2px;
  padding-right: 40px;
  
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.3); 
  }
`;

const LogoImg = styled.img`
  height: 50px; 
  width: auto; 
  margin-left: 15px; 
`;

const NavBar = () => {
  return (
    <>
    {/* <Container> */}
    <Navbar>
        <HomeLink href="#home">
            <Link to="home" smooth={true} duration={500}>
            <LogoWrapper>
                {/* BiCLab   */}
                <img src="/fit_senior_project_website/images/BiCLogo.png" alt="BiCLab" width="50px" />
            </LogoWrapper>
            </Link>
          </HomeLink>
      
      <NavLinks>
        <li>
          <HomeLink href="#home">
            <Link to="home" smooth={true} duration={500}>
                Home
            </Link>
          </HomeLink>
        </li>
        <li>
          <NavLink href="#about">
            <Link to="about" smooth={true} duration={500}>
                About
            </Link>
          </NavLink>
        </li>
        <li>
          <NavLink href="#documentation">
            <Link to="documentation" smooth={true} duration={500}>
                DOCUMENTATION
            </Link>
          </NavLink>
        </li>
        <li>
          <NavLink href="#contact">Contact</NavLink>
        </li>
      </NavLinks>
    </Navbar>
    </>
  );
};

export default NavBar;

