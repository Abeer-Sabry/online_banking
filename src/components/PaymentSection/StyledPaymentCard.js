import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

const StyledPaymentCard = ({
    account,
    amount,
    text,
    btn,
    card,
    active,
    inactive,
    check,
    checkdisabled,
    text1,
    text2,
    text3,
    text4,
    text5,
    text6,
    text7,
    text8

}) => {
    return <Styles>
        <div className="main-titles">
            <h4>{account}</h4>
            <h4>{amount}</h4>
            <p>{text}</p>
            <Button className="size">{btn}</Button>
        </div>
        <div className="mainImg">
            <img className="card" src={card} alt="" />
        </div>
        <div className="img-container">
            <img src={active} alt="" />
            <img src={inactive} alt="" />
        </div>
        <div className="data">
            <p className="text-check">
                <img src={check} alt="" />
                 {text1}
            </p>
            <p className="text-check">
                <img src={check} alt="" />
                {text2}
            </p>
            <p className="text-check">
                <img src={check} alt="" />
                {text3}
            </p>
            <p className="text-check">
                <img src={check} alt="" />
                {text4}
            </p>
            <p className="text-check">
                <img src={checkdisabled} alt="" />
                {text5}
            </p>
            <p className="text-check">
                <img src={checkdisabled} alt="" />
                {text6}
            </p>
            <p className="text-check">
                <img src={checkdisabled} alt="" />
                {text7}
            </p>
            <p className="text-check">
                <img src={checkdisabled} alt="" />
                {text8}
            </p>

        </div>
    </Styles>;
};
const Styles = styled.div`
  background-color: white;
  box-shadow: 0px 0px 50px var(--gray-color);
  border-radius: 20px;
  padding: 40px 0;
  .size{
      font-size:18px;
  }
  .main-titles{
      text-align: center;
      margin-bottom: 30px;
      h4{
          font-size: 23px;
          margin-bottom: 10px;
      }
      p{
          font-size: 15px;
          margin-bottom: 10px;
      }
      
  }
  .mainImg{
      text-align: center;
      margin-bottom: 20px;
      img{
        width:65%;
      }
  }
  .img-container{
      text-align: center;
      img{
          margin-right: 10px;
          width:30px;
      }
  }
  .data{
      padding:0 40px ;
      p{
          display: flex;
          align-items: center;
          margin:13px;
          &:nth-child(6){
            color: gray;
          }
          &:nth-child(7){
            color: gray;
          }
          &:nth-child(8){
            color:gray;
          }
      }
      img{
          margin-right: 20px;
      }
  }
`;
export default StyledPaymentCard;
