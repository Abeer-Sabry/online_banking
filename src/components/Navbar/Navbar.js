import React from "react";
import { Link} from "react-scroll";
import styled from "styled-components";
import Button from "../Button/Button";
import logo from "../../img/logo.svg";
import CustomContainer from "../../Styles/CustomContainer";
import MainResponsiveNav from "./MainResponsiveNav";

const Navbar = () => {
  
  return (
    <>
      <CustomContainer>
        <NavStyles>
          <div className="all-content">
            <div className="navbar">
              <Link to="/">
                <img className="brand" src={logo} alt="" />
              </Link>
              <ul className="main-list">
                <li>
                  <Link to="home" smooth={true} duration={1000}>Home</Link>
                  <Link to="features" smooth={true} duration={1000}>Features</Link>
                </li>
                <li>
                  <Link to="pricing" smooth={true} duration={1000}>Pricing</Link>
                </li>
              </ul>
              <Button type="submit">Signup</Button>
            </div>
             <div className="responsive-navbar">
               <MainResponsiveNav/>
             </div>
            
          </div>
         
        </NavStyles>
      </CustomContainer>
    </>
  );
};

const NavStyles = styled.nav`
  position: relative;
 
  .all-content {
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 0;
    position: relative;
    z-index: 99999;
  }
  /* child */
  .navbar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 99999;
  }
  .nav-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 65%;
  }
  a {
    margin-right: 20px;
    color: #cccccc;
  }
  a.active {
    color: var(--main2-color);
  }
  .brand {
    width: 27px;
  }
  .main-list li {
    display: inline-block;
  }
  .responsive-content {
    z-index: 99999;
    position: absolute;
    top: 60px;
    left: 0;
  }
  .responsive-content li a {
    display: block;
    margin-bottom: 5px;
  display: none;
  }
  .responsive-navbar {
     display: none;
  }
  span {
    color: white;
   
  }
  @media (max-width: 992px) {
    .navbar {
      display: none;
    }
    span {
      display: inline-block;
    }
    .nav-content {
      display: none;
    }
    .responsive-navbar {
       display:block;
       width: 100%;
    }
  }
 
`;

export default Navbar;
