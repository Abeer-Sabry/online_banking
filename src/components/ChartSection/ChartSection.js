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
      width: 100%;
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
  @media (max-width: 981px) {
    .left-content {
      h1 {
        font-size: 32px;
        margin-bottom: 10px;
      }
      p {
        font-size: 13px;
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
    Button {
      font-size: 14px;
    }
  }
  @media (max-width: 868px) {
    .left-content {
      h1 {
        font-size: 28px;
        margin-bottom: 10px;
      }
      p {
        font-size: 12px;
      }
    }
    .state1 {
      padding: 0 15px;
      h1 {
        font-size:25px;
      }
    }
    .state2 {
      padding: 0 15px;
      h1 {
        font-size:25px;
      }
    }
    Button {
      font-size: 13px;
    }
  }
  @media (max-width: 823px) {
    .left-content {
      h1 {
        font-size: 28px;
        margin-bottom: 10px;
      }
      p {
        font-size: 12px;
      }
    }
    .state1 {
      padding: 0 20px;
      h1 {
        font-size:20px;
      }
    }
    .state2 {
      padding: 0 20px;
      h1 {
        font-size:20px;
      }
      h5{
        font-size:14px;
      }
    }
    Button {
      font-size: 13px;
    }
  }
  @media (max-width: 786px) {
    .left-content {
      h1 {
        font-size: 26px;
        margin-bottom: 10px;
      }
      p {
        font-size: 11px;
      }
    }
    .state1 {
      padding: 0 20px;
      h1 {
        font-size:20px;
      }
    }
    .state2 {
      padding: 0 20px;
      h1 {
        font-size:20px;
      }
      h5{
        font-size:12px;
      }
    }
    Button {
      font-size:12px;
    }
  }
  @media (max-width: 771px) {
    grid-template-columns: repeat(1,1fr);
    grid-row-gap:40px;
    .left-content {
      h1 {
        font-size:30px;
        margin-bottom: 10px;
      }
      p {
        font-size: 13px;
      }
    }
    .state1 {
      padding: 0 20px;
      h1 {
        font-size:40px;
      }
      h5{
        font-size:17px;
      }
    }
    .state2 {
      padding: 0 20px;
      h1 {
        font-size:40px;
      }
      h5{
        font-size:17px;
      }
    }
    Button {
      font-size:15px;
    }
  }
  @media (max-width: 442px) {
    grid-template-columns: repeat(1,1fr);
    grid-row-gap:40px;
    .left-content {
      h1 {
        font-size:26px;
        margin-bottom: 10px;
      }
      p {
        font-size: 12px;
      }
    }
    .state1 {
      padding: 0 20px;
      h1 {
        font-size:30px;
      }
      h5{
        font-size:14px;
      }
    }
    .state2 {
      padding: 0 20px;
      h1 {
        font-size:30px;
      }
      h5{
        font-size:14px;
      }
    }
    Button {
      font-size:13px;
    }
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1,1fr);
    grid-row-gap:40px;
    .left-content {
      h1 {
        font-size:24px;
        margin-bottom: 10px;
      }
      p {
        font-size: 11px;
      }
    }
    .state1 {
      padding: 0 20px;
      h1 {
        font-size:30px;
      }
      h5{
        font-size:14px;
      }
    }
    .state2 {
      padding: 0 20px;
      h1 {
        font-size:30px;
      }
      h5{
        font-size:14px;
      }
    }
    Button {
      font-size:12px;
    }
  }
  @media (max-width: 376px) {
    padding-top: 100px;
    grid-template-columns: repeat(1,1fr);
    grid-row-gap:40px;
    .left-content {
      h1 {
        font-size:24px;
        margin-bottom: 10px;
      }
      p {
        font-size: 11px;
      }
    }
    .state1 {
      padding: 0 20px;
      h1 {
        font-size:25px;
      }
      h5{
        font-size:12px;
      }
    }
    .state2 {
      padding: 0 20px;
      h1 {
        font-size:25px;
      }
      h5{
        font-size:12px;
      }
    }
    Button {
      font-size:12px;
    }
  }
  @media (max-width: 366px) {
    grid-template-columns: repeat(1,1fr);
    grid-row-gap:40px;
    .left-content {
      h1 {
        font-size:24px;
        margin-bottom: 10px;
      }
      p {
        font-size: 11px;
      }
    }
    .state1 {
      padding: 0 20px;
      h1 {
        font-size:25px;
      }
      h5{
        font-size:12px;
      }
    }
    .state2 {
      padding: 0 20px;
      h1 {
        font-size:25px;
      }
      h5{
        font-size:12px;
      }
    }
    Button {
      font-size:12px;
    }
  }
  
`;
export default ChartSection;
