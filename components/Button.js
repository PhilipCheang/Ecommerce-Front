import styled, { css } from "styled-components";

export const ButtonStyle = css`
  border: 0;
  color: #000;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  svg{
    height: 16px;
    margin-right: 5px;
  }
  ${props => props.block && css`
    display: block;
    width: 100%;
  `}
  ${props => props.white && !props.outline && css`
    background-color: #fff;
    color: #000;
  `}
  ${props => props.white && props.outline && css`
    background-color: #fff;
    color: #000;
    border: 1px solid #000;
  `}
  
  ${props => props.primary && css`
    background-color: #EF7C8E;
    border: 1px solid #EF7C8E;
    font-size: .9rem;
    @media screen and (min-width: 768px) {
      font-size: 1.2rem;
  `}
  ${props => props.size === 'l' && css`
    font-size: 1.2rem;
    padding: 10px 20px;
    svg{
      height: 20px;
    }
  `}
`;
const StyledButton = styled.button`
  ${ButtonStyle}
`;

export default function Button({children, ...rest}) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  );
}