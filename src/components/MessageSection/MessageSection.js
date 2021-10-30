import React from "react";
import styled from "styled-components";
import avatar1 from "../../img/avatar1.svg";
import avatar2 from "../../img/avatar2.svg";
import avatar3 from "../../img/avatar3.svg";
import avatar4 from "../../img/avatar4.svg";
import avatar5 from "../../img/avatar5.svg";
import meaasging from "../../img/conversation.svg";
import circles from "../../img/bg_circles.svg";
const MessageSection = () => {
  return (
    <MessageStyles>
      <div className="left-content">
        <h1>We Support You In five Different Languages</h1>
        <p>
          Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem
        </p>
        <div className="images-container">
          <div className="images">
            <img className="image1" src={avatar1} alt="" />
            <img className="image2" src={avatar2} alt="" />
            <img className="image3" src={avatar3} alt="" />
            <img className="image4" src={avatar4} alt="" />
            <img className="image5" src={avatar5} alt="" />
          </div>
          <h5>+25</h5>
        </div>
        <img className="left_circle" src={circles} alt="" />
      </div>
      <div className="right-content">
        <img className="msg-img" src={meaasging} alt="" />
        <img className="right_circle" src={circles} alt="" />
      </div>
    </MessageStyles>
  );
};
const MessageStyles = styled.div`
  padding-top: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  align-items: center;
  h1 {
    color: var(--main4-color);
    font-size: 45px;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 20px;
  }
  h5 {
    margin-left: 12px;
    color: gray;
  }
  .msg-img {
    width: 100%;
  }
  .images-container {
    display: flex;
    align-items: center;
  }
  .image2,
  .image3,
  .image4,
  .image5 {
    margin-left: -20px;
  }
  .left-content,
  .right-content {
    position: relative;
  }
  .left_circle {
    position: absolute;
    top: -50px;
    left: -30px;
  }
  .right_circle {
    position: absolute;
    bottom:20px;
    right:20px;
  }
`;
export default MessageSection;
