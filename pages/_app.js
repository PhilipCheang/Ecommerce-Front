// import { createGlobalStyle } from "styled-components";
// import CartContextProvider from "@/components/CartContext";

// // Define the global styles with font-family and other styles
// const GlobalStyles = createGlobalStyle`
//   body {
//     background-color: #D8A7B1;
//     padding: 0;
//     margin: 0;
//     font-family: 'Poppins', sans-serif;
//   }
// `;

// export default function App({ Component, pageProps }) {
//   // Render the app with the global styles
//   return (
//     <>
//       <GlobalStyles />
//       <CartContextProvider>
//         <Component {...pageProps} />
//       </CartContextProvider>
//     </>
//   );
// }


import { createGlobalStyle } from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import CartContextProvider from "@/components/CartContext";

// Define the global styles with font-family and other styles
const GlobalStyles = createGlobalStyle`
  body {
    background-color: #D8A7B1;
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
  }
`;

export default function App({ Component, pageProps }) {
  // Define the font link tag using Helmet
  const fontLink = (
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );

  // Render the app with the global styles and font link tag
  return (
    <>
      <HelmetProvider>
        <GlobalStyles />
          {fontLink}
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </HelmetProvider>
    </>
  );
}
