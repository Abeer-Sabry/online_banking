import React from "react";
import { useSelector } from "react-redux";
import { Link} from "react-scroll";
import styled from "styled-components";
import Button from "../Button/Button";

const ResponsiveNav = () => {
  const { responsive } = useSelector(({ navbar }) => navbar);
  console.log(responsive);

  return (
    <ResponsiveContent responsive={responsive}>
      <ul>
        <li>
          <Link to="home" smooth={true} duration={1000}>Home</Link>
          <Link to="features" smooth={true} duration={1000}>Features</Link>
          <Link to="pricing" smooth={true} duration={1000}>pricing</Link>
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
