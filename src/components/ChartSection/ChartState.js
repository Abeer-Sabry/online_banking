import React from 'react'
import styled from 'styled-components'

const ChartState = (props) => {
    return (
        <ChartStateStyles className={props.className}>
               <h5>{props.name}</h5>
               <h1>{props.amount}</h1>
        </ChartStateStyles>
    )
}
const ChartStateStyles = styled.div`
 h1{
     color:var(--main4-color);
     font-size:48px;
 }
 h5{
     font-size: 15px;
 }
`
export default ChartState
