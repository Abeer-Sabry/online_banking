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
  

`
export default Info
