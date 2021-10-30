import React from 'react'
import styled from 'styled-components'


const Info = () => {
    return (
        <div >
            <StylesComp>
                {/* <div className="leftContent">
                    <HeaderTextContent />
                </div>
                <div className="rightContent">
                    <HeaderImageContent />
                </div> */}
                hiiii
            </StylesComp >
        </div>
    )
}
const StylesComp = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-template-areas: 
  "leftContent rightContent"
  
  ;
  /* grid-template-rows:repeat(2,1fr); */
/* @media (max-width:412px){
  grid-template-columns:repeat(1,1fr);
  grid-template-areas:
     "leftContent"
     "rightContent";

} */
`
export default Info
