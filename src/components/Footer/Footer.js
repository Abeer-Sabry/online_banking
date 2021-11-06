import React from "react";
import styled from "styled-components";
import CustomContainer from "../../Styles/CustomContainer";
import logo from "../../img/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <FooterStyles>
      <CustomContainer>
        <div className="nav-content">
          <div className="nav-right">
            <img src={logo} alt="" />
            <p>
              Copyright @2021 Sabry <br />
              All rights reserved
            </p>
          </div>
          <div className="nav-links">
            <ul className="links1">
              <li>
                <Link to="">Team</Link>
                <Link to="">Press</Link>
                <Link to="">Fees</Link>
              </li>
            </ul>
            <ul className="links2">
              <li>
                <Link to="">Services</Link>
                <Link to="">projects</Link>
                <Link to="">Team</Link>
              </li>
            </ul>
            <ul className="links3">
              <li>
                <Link to="">Terms of use</Link>
                <Link to="">Privacy policy</Link>
                <Link to="">Contact us</Link>
              </li>
            </ul>
          </div>
        </div>
      </CustomContainer>
    </FooterStyles>
  );
};
const FooterStyles = styled.div`
  background-color: var(--gray-color);
  padding: 30px 0;
  .nav-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    img{
        width:15%;
    }
  }
  .nav-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
  a {
    display: block;
    margin-bottom: 5px;
    color: var(--main4-color);
  }
  @media (max-width:771px){
    .nav-content {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap:40px;
    }
  }
`;
export default Footer;
