import React from "react";
import styled from "styled-components";
import bg from "../../img/bg.svg";
import HeaderImageContent from "./HeaderImageContent";
import HeaderTextContent from "./HeaderTextContent";
import CustomContainer from "../../Styles/CustomContainer";
const Header = () => {
  return (
    <>
      <HeaderStyles>
        <CustomContainer>
          <div className="header-content">
            <div className="leftContent">
              <HeaderTextContent />
            </div>
            <div className="rightContent">
              <HeaderImageContent />
            </div>
          </div>
        </CustomContainer>
      </HeaderStyles>
    </>
  );
};
const HeaderStyles = styled.header`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  background-position-y: -200px;
  transform: translateY(-75px);
  z-index: 0;
  padding-top: 50px;
  .header-content {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
  }
  @media (max-width: 412px) {
    padding-top: 100px;
    .header-content {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export default Header;
