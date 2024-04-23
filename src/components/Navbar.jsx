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
        <h2>Nav<span>bar</span></h2>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a onClick={handleClick} href="/">Inicio</a>
          <a onClick={handleClick} href="/">Nosotros</a>
          <a onClick={handleClick} href="/">Productos y Servicios</a>
          <a onClick={handleClick} href="/">Catalogo</a>
          <a onClick={handleClick} href="/">Contacto</a>
        </div>
        <div className='burger'>
        <BurgerButtom clicked={clicked} handleClick={handleClick}/>
        </div>
        <BgDiv className={`initial ${clicked ? 'active' : ''}`}></BgDiv>
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
  right: 0;
  margin-left: auto;
  margin-rigth: auto;
  text-align: center;
  transition: all .5s ease;
  a{
    color: white;
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
    display: block;
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
    font-size: 2rem;
    margin-top: 1rem;
    color: white;
  }
}
.burger{
  @media(min-width: 768px){
    display: none;
  }
}
`

const BgDiv = styled.div` 
border-radius: 0 0 80% 0;
position: absolute;
background-color: #222;
top:-1000px;
left: -1000px;
z-index: -1;
transition: all .6s ease;

&.active{
  border-radius: 0 0 80% 0;
top:0;
left: 0;
height: 100%;
width: 100%;
}
` 