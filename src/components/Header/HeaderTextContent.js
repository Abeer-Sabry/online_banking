import React from 'react'
import styled from 'styled-components'
import AnimatedButton from '../AnimatedButton/AnimatedButton'

const HeaderTextContent = () => {
    return (
        <RightContentStyle>
            <h1>Smart Banking For  <br/> Freelancers</h1>
            <p>Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem
                Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including  versions of Lorem
            </p>
            <AnimatedButton>
                Register Now
            </AnimatedButton>
        </RightContentStyle>
    )
}
const RightContentStyle = styled.div`
  
h1{
    margin-bottom: 5px;   
    font-size:2.6rem;
    color: white;
    font-weight:650;
}
p{
  margin-bottom: 10px;
  color:white;
  font-size:14px;
}
`
export default HeaderTextContent
