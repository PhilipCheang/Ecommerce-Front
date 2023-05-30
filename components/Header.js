import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import BarsIcon from "./icons/BarsIcon";

// this is how you import styled component
const StyledHeader = styled.header`
  background-color: #B6E2D3;
`;
const Logo = styled(Link)`
  color: #D8A7B1;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;
// display flex wrap content to be on one line while space between logo and link are spaced out
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
`;

const NavLink = styled(Link)`
  display: block;
  color: #D8A7B1;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;

const StyledNav = styled.nav`
  ${props => props.mobileNavActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #B6E2D3;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;

const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>JACQUI CLEANERS</Logo>
            <StyledNav mobileNavActive={mobileNavActive}>  
              <NavLink href={'/'}>Home</NavLink>
              <NavLink href={'/products'}>All Products</NavLink>
              <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
            </StyledNav>
            <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
              <BarsIcon />
            </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  )
}