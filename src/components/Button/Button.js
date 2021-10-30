import React from 'react'
import styled from 'styled-components'

const Button = (props) => {
    return (
        <ButtonStyle type={props.type} className={props.className}>
            {props.children}
        </ButtonStyle>
    )
}

const ButtonStyle = styled.button`
   background-color: var(--main-color);
   border: none;
   color: white;
   padding: 5px 12px;
   border-radius: 10px;
   
 `
export default Button
