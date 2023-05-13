import styled from "styled-components";
import Center from "./Center";
import ProductBox from "./ProductBox";

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
  height: 250px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  margin: 30px 0 20px;
`;

export default function NewProducts({products}) {
  return (
    <Center>
      <Title>Services</Title>
      <ProductsGrid>
      {products?.length > 0 && products.map(product => (
        <ProductBox {...product} />
      ))}
      </ProductsGrid>
    </Center>
  );
}