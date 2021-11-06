import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button/Button";

const ResponsiveNav = () => {
  const { responsive } = useSelector(({ navbar }) => navbar);
  console.log(responsive);

  return (
    <ResponsiveContent responsive={responsive}>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/info">info</NavLink>
        </li>
        
      </ul>
      <Button type="submit">Signup</Button>
    </ResponsiveContent>
  );
};
const ResponsiveContent = styled.div`
  display: ${({ responsive }) => (responsive ? "block" : "none")};
  
`;
export default ResponsiveNav;
