import React from "react";
import styled from "styled-components";
import ChartState from "./ChartState";
import chart from "../../img/chart.svg";
import AnimatedButton from "../AnimatedButton/AnimatedButton";
const ChartSection = () => {
  return (
    <ChartStyles>
      <div className="right-content">
        <ChartState className="state1" name={"Balance"} amount={"$250"} />
        <ChartState
          className="state2"
          name={"Last Transaction"}
          amount={"$1000"}
        />
        <div className="chartImg">
          <img className="chartImg" src={chart} alt="" />
        </div>
      </div>
      <div className="left-content">
        <h1>
          Manage your <br /> finances like a <br /> pro in no time
        </h1>
        <p>
          Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem
        </p>
        <AnimatedButton>Learn more</AnimatedButton>
      </div>
    </ChartStyles>
  );
};
const ChartStyles = styled.div`
  padding-top: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  grid-column-gap: 40px;

  .right-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    width: 100%;

    .state1 {
      width: 100%;
      grid-column: 1/2;
      border-radius: 50px;
      border: 1px solid var(--gray-color);
      text-align: center;
      align-items: center;
      padding: 60px 0;
      box-shadow: 2px 0px 15px var(--gray-color);
    }
    .state2 {
      width: 100%;
      grid-column: 2/3;
      border-radius: 50px;
      border: 1px solid var(--gray-color);
      text-align: center;
      align-items: center;
      padding: 60px 0;
      box-shadow: 2px 0px 15px var(--gray-color);
    }
    .chartImg {
      grid-column: 1/3;
      grid-row: 2/3;
      width:100%;
      border-radius: 30px;
      box-shadow: 2px 8px 10px var(--gray-color);
    }
  }
  .left-content {
    width: 100%;
  }
  h1 {
    color: var(--main4-color);
    font-size: 40px;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
  @media (max-width: 412px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 30px;
    .left-content {
      h1 {
        font-size: 30px;
        margin-bottom: 10px;
      }
      p {
        font-size: 13.5px;
      }
    }
    .state1 {
      h1 {
        font-size: 30px;
      }
    }
    .state2 {
      h1 {
        font-size: 30px;
      }
    }
  }
`;
export default ChartSection;
