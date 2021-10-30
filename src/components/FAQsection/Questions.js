import React, { useState } from "react";
import styled from "styled-components";
import plus from "../../img/plus.svg";
import minus from "../../img/minus.svg";

const Questions = (item) => {
  const { title, description } = item;
  const [toggle, setToggle] = useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };
  return (
    <QuestionsStyles>
      <div className="main">
        <div className="title">
          <h4>{title}</h4>
          <button type="" onClick={onToggle}>
            {toggle ? (
              <img className="plus" src={minus} alt="" />
            ) : (
              <img className="plus" src={plus} alt="" />
            )}
          </button>
        </div>
        {toggle && <p>{description}</p>}
      </div>
    </QuestionsStyles>
  );
};
const QuestionsStyles = styled.div`
  transition: all ease 0.4s;
  .main {
    background-color: white;
    box-shadow: 2px 2px 20px var(--gray-color);
    border-radius: 20px;
    margin-bottom: 20px;
    padding: 15px;
  }
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
  }

  button {
    border: none;
    background-color: transparent;
    width: 20px;
    .plus {
      width: 100%;
    }
  }
  p {
  }
`;
export default Questions;
