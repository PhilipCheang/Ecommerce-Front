import styled from "styled-components";

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  justify-content: center;
  padding: 10px;
`;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <StyledFooter>
      Copyright ⓒ Philip Cheang {year}
    </StyledFooter>
  );
}

export default Footer;