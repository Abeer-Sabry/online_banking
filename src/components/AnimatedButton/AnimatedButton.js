import React from 'react'
import styled from 'styled-components'
import arrow from '../../img/arrow.svg'
import blob1 from '../../img/blob_top.svg'
import blob2 from '../../img/blob_bottom.svg'
const AnimatedButton = (props) => {
    return (
        <AnimatedButtonStyle type={props.type}>
            {props.children} {""}
            <img className="arrow" src={arrow} alt="" />
            <img className="blob1" src={blob1} alt="" />
            <img className="blob2" src={blob2} alt="" />

        </AnimatedButtonStyle>
    )
}
const AnimatedButtonStyle = styled.button`
   background-color: var(--main2-color);
   border: none;
   color: white;
   padding: 11px 17px;
   border-radius: 10px;
   font-size: 16px;
   position: relative;
   transition:all ease 0.2s;
   &:hover{
       .blob1{
           right:60px;
       }
       .blob2{
           left: 90px;
       }
       .arrow{
        margin-left: 10px;
       }
   }
   .arrow{
       margin-left: 5px;
       width:17px;
       transition:all ease 0.4s;
   }
   .blob1,.blob2{
       position: absolute;
       width:70px;
   }
   .blob1{
       top: 0;
       right: 0;
       transition:all ease 0.4s;
   }
   .blob2{
       bottom:0;
       left:10px;
       transition:all ease 0.4s;
   }
`
export default AnimatedButton
