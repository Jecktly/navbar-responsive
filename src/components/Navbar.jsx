import React, {useState} from 'react'
import styled from 'styled-components'
import BurgerButtom from './BurgerButtom'
function Navbar() {
  const [clicked, setClicked] = useState(false)
  const handleClick = () =>{
    setClicked(!clicked)
  }
  return (
    <>
      <NavContainer>
        <h2>Meta<span>box</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a href="/">Inicio</a>
          <a href="/">Nosotros</a>
          <a href="/">Productos y Servicios</a>
          <a href="/">Catalogo</a>
          <a href="/">Contacto</a>
        </div>
        <div className='burger'>
        <BurgerButtom clicked={clicked} handleClick={handleClick}/>
        </div>
      </NavContainer>
    </>
  )
}

export default Navbar
 
const NavContainer = styled.nav ` 
h2{
    font-weight: 400;
color: #d5d5d5;
    span{
        font-weight: bold;
    }
}
padding: .4rem;
background-color: #111111;
display: flex;
align-items: center;
justify-content: space-between;
a{
  color: white;
  text-decoration: none;
  margin-right: 1rem;
}

.links{
  position: absolute;
  top: -700px;
  left: -2000px;
  margin-left: auto;
  margin-rigth: auto;
  text-align: center;
  a{
    color: black;
    font-size: 2rem;
    display: block;
  }
  @media (min-width: 768px){
    position: initial;
    margin: 0;
    a{
      font-size: 1rem;
      color: white;
      display: inline;
    }
  }
}
.links.active{
  width: 100%
  display: block;
  position:absolute;
  margin-left: auto;
  margin-right: auto;
  top: 30%;
  left: 0;
  right: 0;
  text-align: center;
  a{
    color: black;
  }
}
.burger{
  @media(min-width: 768px){
    display: none;
  }
}
`