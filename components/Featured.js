import styled from "styled-components";
import Center from "./Center";
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import Image from "next/image";
import { CartPlus } from "@styled-icons/fa-solid";

export const Bg = styled.div`
  background-color: #FAE8E0;
  color: #000;
  padding: 50px 0px;
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 25px;
`;

const Title = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  @media screen and (min-width: 768px) {
    font-size: 3rem;
  }
`;

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  img{
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
  div:nth-child(1) {
    order:2;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.1fr 0.9fr;
    div:nth-child(1) {
      order: 0;
    }
    img{
      max-width: 100%;
      height: 100%;
    }
  }
`;

const Column = styled.div`
  display: flex;
  align-items: center;
`;

export default function Featured({product}) {
  const {addProduct} = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <Bg>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <Title>Professional Blazer Dry Cleaning</Title>
              <ButtonWrapper>
                <ButtonLink href={'/product/'+product._id} outline={1} white={1}>Read More</ButtonLink>
                <Button primary onClick={addFeaturedToCart}>
                  <CartPlus />
                  Add to Cart
                </Button>
              </ButtonWrapper>
            </div>
          </Column>
          <Column>
            <div>
              <Image src="https://philip-next-ecommerce.s3.us-east-2.amazonaws.com/1683754527693.jpg" alt="heroe" width={700} height={500} priority={true} />
            </div> 
          </Column>         
        </ColumnsWrapper>
      </Center>  
    </Bg>
  )
}