import React from 'react'
import styled from 'styled-components'
function Navbar() {
  return (
    <>
      <NavContainer>
        <h2>Meta<span>box</span></h2>
      </NavContainer>
    </>
  )
}

export default Navbar
 
const NavContainer = styled.nav ` 
h2{
    font-weight: 400;
    span{
        font-weight: bold;
    }
}
padding: .4rem;
background-color: #111111;
display: flex;
color: #d5d5d5;
`