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
  padding-top: 100px;
  .header-content {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 40px;
    align-items: center;
  }
  @media (max-width: 992px) {
    padding-top: 100px;
    .leftContent {
      h1 {
        font-size: 37px;
      }
      p {
        font-size: 14px;
      }
      button {
        font-size: 14px;
      }
    }
    .rightContent {
      .mainImg {
        width: 430px;
      }
      .ring1,
      .message1,
      .message2 {
        width: 65px;
      }
      .message2 {
        left: -10px;
        bottom: 150px;
      }
    }
  }
  @media (max-width: 977px) {
    padding-top: 100px;
    .leftContent {
      h1 {
        font-size: 35px;
      }
      p {
        font-size: 13px;
      }
      button {
        font-size: 14px;
      }
    }
    .rightContent {
      .mainImg {
        width: 430px;
      }
      .ring1,
      .message1,
      .message2 {
        width: 65px;
      }
      .message2 {
        left: -10px;
        bottom: 150px;
      }
    }
  }
  @media (max-width: 958px) {
    padding-top: 100px;
    .leftContent {
      h1 {
        font-size: 33px;
      }
      p {
        font-size: 12px;
      }
      button {
        font-size: 14px;
      }
    }
    .rightContent {
      .mainImg {
        width: 430px;
      }
      .ring1,
      .message1,
      .message2 {
        width: 65px;
      }
      .message2 {
        left: -10px;
        bottom: 150px;
      }
    }
  }
  @media (max-width: 942px) {
    padding-top: 100px;
    .leftContent {
      h1 {
        font-size: 31px;
      }
      p {
        font-size: 12px;
      }
      button {
        font-size: 13px;
      }
    }
    .rightContent {
      .mainImg {
        width: 470px;
      }
      .ring1,
      .message1,
      .message2 {
        width: 65px;
      }
      .message2 {
        left: -10px;
        bottom: 150px;
      }
    }
  }
  @media (max-width: 771px) {
    padding-top: 130px;
    .header-content {
      grid-template-columns: repeat(1, 1fr);
    }
    .leftContent {
      h1 {
        font-size: 31px;
      }
      p {
        font-size: 13px;
      }
      button {
        font-size: 13px;
      }
    }
    .rightContent {
      .mainImg {
        width: 470px;
      }
      .ring1,
      .message1,
      .message2 {
        width: 65px;
      }
      .ring1 {
        bottom: 100px;
        right: 120px;
      }
      .message1 {
        top: 0;
        right: 110px;
      }
      .message2 {
        left: -10px;
        bottom: 150px;
      }
    }
  }
  @media (max-width: 731px) {
    padding-top: 130px;
    .header-content {
      grid-template-columns: repeat(1, 1fr);
    }
    .leftContent {
      h1 {
        font-size: 31px;
      }
      p {
        font-size: 13px;
      }
      button {
        font-size: 13px;
      }
    }
    .rightContent {
      .mainImg {
        width: 470px;
      }
      .ring1,
      .message1,
      .message2 {
        width: 65px;
      }
      .ring1 {
        bottom: 100px;
        right: 90px;
      }
      .message1 {
        top: 0;
        right: 90px;
      }
      .message2 {
        left: -10px;
        bottom: 150px;
      }
    }
  }
  @media (max-width: 664px) {
    padding-top: 130px;
    .header-content {
      grid-template-columns: repeat(1, 1fr);
    }
    .leftContent {
      h1 {
        font-size: 31px;
      }
      p {
        font-size: 13px;
      }
      button {
        font-size: 13px;
      }
    }
    .rightContent {
      .mainImg {
        width: 470px;
      }
      .ring1,
      .message1,
      .message2 {
        width: 65px;
      }
      .ring1 {
        bottom: 100px;
        right: 90px;
      }
      .message1 {
        top: 0;
        right: 90px;
      }
      .message2 {
        left: -10px;
        bottom: 150px;
      }
    }
  }
  @media (max-width: 561px) {
    padding-top: 130px;
    .header-content {
      grid-template-columns: repeat(1, 1fr);
    }
    .leftContent {
      width: 75%;
      h1 {
        font-size: 31px;
      }
      p {
        font-size: 13px;
      }
      button {
        font-size: 13px;
      }
    }
    .rightContent {
      width: 75%;
      .mainImg {
        width: 470px;
      }
      .ring1,
      .message1,
      .message2 {
        width: 65px;
      }
      .ring1 {
        bottom: 100px;
        right: -40px;
      }
      .message1 {
        top: 0;
        right: -40px;
      }
      .message2 {
        left: -10px;
        bottom: 150px;
      }
    }
  }
  @media (max-width: 475px) {
    padding-top: 130px;
    .header-content {
      grid-template-columns: repeat(1, 1fr);
    }
    .leftContent {
      width: 75%;
      h1 {
        font-size: 31px;
      }
      p {
        font-size: 13px;
      }
      button {
        font-size: 13px;
      }
    }
    .rightContent {
      width: 50%;
      .mainImg {
        width: 400px;
      }
      .ring1,
      .message1,
      .message2 {
        width: 65px;
      }
      .ring1 {
        bottom: 100px;
        right: -150px;
      }
      .message1 {
        top: 0;
        right: -150px;
      }
      .message2 {
        left: -10px;
        bottom: 150px;
      }
    }
  }
  @media (max-width: 422px) {
    padding-top: 130px;
    .header-content {
      grid-template-columns: repeat(1, 1fr);
    }
    .leftContent {
      width: 75%;
      h1 {
        font-size: 31px;
      }
      p {
        font-size: 13px;
      }
      button {
        font-size: 13px;
      }
    }
    .rightContent {
      width: 50%;
      .mainImg {
        width: 380px;
      }
      .ring1,
      .message1,
      .message2 {
        width: 65px;
      }
      .ring1 {
        bottom: 100px;
        right: -120px;
        width: 50px;
      }
      .message1 {
        top: 0;
        right: -120px;
        width: 50px;
      }
      .message2 {
        left: -10px;
        bottom: 150px;
        width: 50px;
      }
    }
  }
  @media (max-width: 376px) {
    padding-top: 130px;
    .header-content {
      grid-template-columns: repeat(1, 1fr);
    }
    .leftContent {
      width: 75%;
      h1 {
        font-size: 25px;
      }
      p {
        font-size: 12px;
      }
      button {
        font-size: 11px;
      }
    }
    .rightContent {
      width: 50%;
      .mainImg {
        width: 320px;
      }
      .ring1,
      .message1,
      .message2 {
        width: 45px;
      }
      .ring1 {
        bottom: 90px;
        right: -110px;
        
      }
      .message1 {
        top: 0;
        right: -100px;
        
      }
      .message2 {
        left: -10px;
        bottom: 150px;
        
      }
    }
    
  }
`;
export default Header;
