import Link from "next/link";
import styled from "styled-components";
import Center from "./Center";
import { useContext } from "react";
import { CartContext } from "./CartContext";

// this is how you import styled component
const StyledHeader = styled.header`
  background-color: #B6E2D3;
`;
const Logo = styled(Link)`
  color: #D8A7B1;
  text-decoration: none;
`;
// display flex wrap content to be on one line while space between logo and link are spaced out
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
`;

const NavLink = styled(Link)`
  color: #D8A7B1;
  text-decoration: none;
`;

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`;

export default function Header() {
  const {cartProducts} = useContext(CartContext);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>JACQUI CLEANERS</Logo>
            <StyledNav>  
              <NavLink href={'/'}>Home</NavLink>
              <NavLink href={'/products'}>All Products</NavLink>
              <NavLink href={'/categories'}>Categories</NavLink>
              <NavLink href={'/account'}>Account</NavLink>
              <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
            </StyledNav>
        </Wrapper>
      </Center>
    </StyledHeader>
  )
}