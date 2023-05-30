import styled from "styled-components"
import Button from "./Button";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const ProductWrapper = styled.div`
`;

const Box = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CardImage = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

const CardTitle = styled(Link)`
  align-items: center; 
  justify-content: center;
  font-size: 0.9rem;
  font-weight: bold;
  color: inherit;
  text-decoration: none;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
`;

const Price = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export default function ProductBox({_id, title, description, price, images}) {
  const {addProduct} = useContext(CartContext);
  const url = '/product/'+_id;
  return (
    <ProductWrapper>
      <Box href={url}>
        <Card>
          <CardImage src={images?.[0]} alt="" />
        </Card>
      </Box>
        <ProductInfoBox>
          <CardTitle href={url}>{title}</CardTitle>
          <PriceRow>
            <Price>
              ${price}
            </Price>
            <Button onClick={() => addProduct(_id)} primary>
              {/* <CartIcon /> */}
              Add to Cart
            </Button>
          </PriceRow>   
        </ProductInfoBox>
      </ProductWrapper>   
  );
}
