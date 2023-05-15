import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import Center from "@/components/Center";
import { Bg } from "@/components/Featured";
import Header from "@/components/Header";
import Input from "@/components/Input";
import Table from "@/components/Table";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.2fr .8fr;
  gap: 40px;
  margin-top: 40px;
`;

const Box = styled.div`
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
`;

const ProductInfoCell = styled.td`
  padding: 10px 0;
  border-top: 1px solid rgb(0,0,0,.1);
`;

const ProductImageBox = styled.div`
  width: 100px;
  height: 100px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    max-width: 80px;
    max-height: 80px;
  }
`;

const QuantityLabel = styled.span`
  padding: 0 3px;
  align-items: center;
  justify-content: center;
`;

const CityHolder = styled.div`
  display: flex;
  gap: 5px;
`;

export default function CartPage() {
  const {cartProducts, addProduct, removeProduct, clearCart} = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post('/api/cart', {ids: cartProducts})
        .then(response => {
          setProducts(response.data);
        })     
    } else {
      setProducts([]);
    }
  }, [cartProducts]);
  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window?.location.href.includes('sucess')) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);

  function moreOfThisProduct(id) {
    addProduct(id);
  }
  function lessOfThisProduct(id) {
    removeProduct(id);
  }
  async function goToPayment() {
    try {
      const response = await axios.post('/api/checkout', {
        name, 
        phoneNumber, 
        email, 
        city, 
        postalCode, 
        streetAddress, 
        country, 
        cartProducts,
      });
      if (response.data.url) {
        window.location = response.data.url;
      }
    } catch (error) {
      console.error('Error sending checkout request:', error);
    }
  }
  let total = 0;
  for ( const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.price || 0;
    total += price;
  }
  if (isSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }
  return (
    <>
      <Header/>
      <Bg>      
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            {!cartProducts?.length && (
              <div>Your Cart is Empty</div>
            )}
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>  
                  <tbody> 
                    {products.map(product => (
                      <tr key={product._id}>
                        <ProductInfoCell>
                          <ProductImageBox>
                            <img src={product.images[0]} alt="" />
                          </ProductImageBox>
                          {product.title}
                        </ProductInfoCell>
                        <td>
                          <Button 
                            onClick={() => lessOfThisProduct(product._id)
                            }>-</Button>
                          <QuantityLabel>                            
                            {cartProducts.filter(id => id === product._id).length}
                            </QuantityLabel>
                          <Button 
                            onClick={() => moreOfThisProduct(product._id)
                            }>+</Button>
                        </td>
                        {/*calculate quantity price total  */}
                        <td>
                        ${cartProducts.filter(id => id === product._id).length * product.price}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td></td>
                      <td>${total}</td>
                    </tr>                  
                  </tbody>
              </Table>
            )}
          </Box>
          {!!cartProducts?.length && (
          <Box>
            <h2>Order Information</h2>
            <Input 
              type="text" 
              placeholder="Name" 
              name="name" 
              value={name} 
              onChange={ev => setName(ev.target.value)} />
            <Input 
              type="text" 
              placeholder="Phone Number" 
              name="phoneNumber" 
              value={phoneNumber} 
              onChange={ev => setPhoneNumber(ev.target.value)} />
            <Input 
              type="text" 
              placeholder="Email" 
              name="email" 
              value={email} 
              onChange={ev => setEmail(ev.target.value)} />
            <Input 
              type="text" 
              placeholder="Street Address" 
              name="streetAddress" 
              value={streetAddress} 
              onChange={ev => setStreetAddress(ev.target.value)} />
          <CityHolder>  
            <Input 
              type="text" 
              placeholder="City" 
              name="city" 
              value={city} 
              onChange={ev => setCity(ev.target.value)} />
            <Input 
              type="text" 
              placeholder="Postal Code" 
              name="postalCode" 
              value={postalCode} 
              onChange={ev => setPostalCode(ev.target.value)} />
          </CityHolder>
            <Input 
              type="text" 
              placeholder="Country" 
              name="country" 
              value={country} 
              onChange={ev => setCountry(ev.target.value)} />
            <Button block primary 
              onClick={goToPayment}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z" clipRule="evenodd" />
                </svg>
                Continue to payment
            </Button>
          </Box>
          )}            
        </ColumnsWrapper>
      </Center>
      </Bg>
    </>
  );
}  
