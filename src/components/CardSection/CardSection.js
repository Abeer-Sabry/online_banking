import React from "react";
import styled from "styled-components";
import card from "../../img/creditcard.svg";
const CardSection = () => {
  return (
    <CardSectionStyle>
      <div className="card-left" >
        <h1>One Card for all your Payments </h1>
        <p>
          {" "}
          <p>
            Ipsum passages, and more recently with desktop publishing software
            like Aldus PageMaker including versions of Lorem Ipsum passages, and
            more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem
          </p>
        </p>
      </div>
      <div className="card-right">
        <img src={card} alt="" />
      </div>
    </CardSectionStyle>
  );
};
const CardSectionStyle = styled.div`
  padding-top: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-column-gap: 40px;

  .card-left {
    width: 100%;
  }
  .card-right {
    width: 100%;
  }
  img {
    width: 100%;
  }
  h1 {
    color: var(--main4-color);
  }
  @media (max-width: 992px) {
    padding-top: 0;
    p {
      font-size: 14px;
    }
  }
  @media (max-width: 901px) {
    padding-top: 0;
    p {
      font-size: 12px;
    }
  }
  @media (max-width: 823px) {
    padding-top: 0;
    h1 {
      font-size: 28px;
    }
    p {
      font-size: 12px;
    }
  }
  @media (max-width: 771px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 40px;
    padding-top: 0;
    h1 {
      font-size: 30px;
    }
    p {
      font-size: 14px;
    }
    img {
      width: 400px;
    }
  }
  @media (max-width: 490px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 40px;
    padding-top: 0;
    h1 {
      font-size: 28px;
    }
    p {
      font-size: 13px;
    }
    img {
      width: 350px;
    }
  }
  @media (max-width: 436px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 40px;
    padding-top: 0;
    h1 {
      font-size: 26px;
    }
    p {
      font-size: 12px;
    }
    img {
      width: 300px;
    }
  }
  @media (max-width: 376px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 40px;
    padding-top: 0;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 11px;
    }
    img {
      width: 280px;
    }
  }
`;
export default CardSection;
