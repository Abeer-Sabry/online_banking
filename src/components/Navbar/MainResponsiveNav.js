import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logo.svg";
import { useDispatch } from "react-redux";
import responsiveAction from "../../Redux/Navbar/actions";
import ResponsiveNav from "./ResponsiveNav";

const MainResponsiveNav = () => {
  const dispatch = useDispatch();
  return (
    <NavStyles>
      <Link to="/">
        <img className="brand" src={logo} alt="" />
      </Link>
      <span onClick={() => dispatch(responsiveAction())}>
        <i className="fas fa-grip-lines"></i>
      </span>
      <div className="responsive-content">
            <ResponsiveNav />{" "}
          </div>
    </NavStyles>
  );
};
const NavStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 99999;
  @media screen and (max-width:992px){
         .responsive-content ul li a{
             display: block;
         }
  }
`;
export default MainResponsiveNav;
