// next.config.js
const withImages = require('next-images');

module.exports = withImages({
  reactStrictMode: true,
  images: {
    domains: ['philip-next-ecommerce.s3.us-east-2.amazonaws.com', 'philip-next-ecommerce.s3.amazonaws.com'],
  },
});



// const nextConfig = {
//   reactStrictMode: true,
//   compiler: {
//     styledComponents: true,
//   },
//   images: {
//     domains: ['philip-next-ecommerce.s3.us-east-2.amazonaws.com', 'philip-next-ecommerce.s3.amazonaws.com'],
//   },
// };

// module.exports = nextConfig;
