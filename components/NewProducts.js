import styled from "styled-components";
import Center from "./Center";
import ProductsGrid from "./ProductsGrid";


const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: normal;
  margin: 30px 0 20px;
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;

export default function NewProducts({products}) {
  return (
    <Center>
      <Title>Services</Title>
      <ProductsGrid products={products} />
    </Center>
  );
}