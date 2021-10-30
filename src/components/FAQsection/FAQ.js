import React from "react";
import styled from "styled-components";
import lines from "../../img/lines.svg";
import Questions from "./Questions";
import data from "./questionsData";
const FAQ = () => {
  return (
    <FQAStyles>
      <div className="heading">
        <h3 className="small-heading">
          Frequently <span>asked questions</span>
        </h3>
        <p className="c-para">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          maxime ipsa nam expedita dolorem distinctio illo ad doloribus atque
          fuga, Nihil laboriosam beatae fugit.
        </p>
        <div className="lines">
          <img src={lines} alt="" />
        </div>
      </div>
      <div className="questions-contianer">
        {data.map((item) => {
          return <Questions key={item.id} {...item} />;
        })}
      </div>
    </FQAStyles>
  );
};
const FQAStyles = styled.div`
  padding-top: 200px;
  padding-bottom: 200px;

  .heading {
    text-align: center;
    h3 {
      color: var(--main4-color);
      font-size: 37px;
      margin-bottom: 15px;
      span {
        color: var(--main-color);
      }
    }
    p {
      width: 50%;
      margin: 0 auto;
      margin-bottom: 50px;
    }
    img {
      width: 80%;
      position: absolute;
      top: 400%;
      left: 0;
      z-index: -1;
    }
  }
  
`;
export default FAQ;
