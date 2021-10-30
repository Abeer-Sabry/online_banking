import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../Button/Button'
import logo from '../../img/logo.svg'
import CustomContainer from '../../Styles/CustomContainer'
const Navbar = () => {
    return (
        <>
            <CustomContainer>
                <NavStyles >
                    <div >
                        <Link to="/">
                            <img className="brand" src={logo} alt="" />
                        </Link>
                    </div>
                    <ul>
                        <li>
                            <NavLink to="/home">Home</NavLink>
                            <NavLink to="/info">info</NavLink>
                        </li>
                    </ul>
                    <Button type="submit">
                        Signup
                    </Button>
                </NavStyles>
            </CustomContainer>
        </>
    )
}
const NavStyles = styled.nav`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 0;
      position: relative;
      z-index: 99999;
      /* child */
      a{
          margin-right: 20px;
          color:#cccccc;
      }
      a.active{
          color: var(--main2-color);
      }
      .brand{
          width:27px;
      }
`

export default Navbar
