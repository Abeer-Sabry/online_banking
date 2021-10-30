import React from "react";
import styled from "styled-components";
import card from "../../img/creditcard.svg";
const CardSection = () => {
  return (
    <CardSectionStyle>
      <div className="card-left">
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
  @media (max-width: 412px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap:20px ;
    img{
        width:270px;
    }
  }
`;
export default CardSection;
