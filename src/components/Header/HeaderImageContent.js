import React from 'react'
import styled from 'styled-components'
import Phone from '../../img/phone.svg'
import Ring1 from '../../img/ring_orange.svg'
import message1 from '../../img/message_pink.svg'
import message2 from '../../img/message_blue.svg'
const HeaderImageContent = () => {
    return (
        <HeaderContent>
            <img className="mainImg" src={Phone} alt="" />
            <img className="ring1" src={Ring1} alt="" />
            <img className="message1" src={message1} alt="" />
            <img className="message2" src={message2} alt="" />
        </HeaderContent>
    )
}
const HeaderContent = styled.div`
 position: relative;
 .ring1{
     position:absolute;
     bottom:80px;
     right:60px;
     width:90px;
     animation: ease-in-out move infinite 2s;
     transition: ease all 2s;
 }
 .message1{
     position:absolute;
     top:0;
     right:40px;
     width:97px;
     animation: ease-in-out move infinite 1.7s;
     transition: ease all 0.4s;
 }
 .message2{
     position:absolute;
     bottom:200px;
     left:-40px;
     width:97px;
     animation: ease-in-out move infinite 2s;
     transition: ease all 1s;
 }
 @keyframes move{
     0%{
      transform: translateY(0);
      rotate: 0;
      scale: 1;
     }
     50%{
        transform: translateY(20px);
        rotate:20deg;
        scale: 1.2;
     }
     100%{
        transform: translateY(0px);
        rotate: 0;
        scale: 1;
     }
 }
 
`
export default HeaderImageContent
