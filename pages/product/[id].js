import Center from "@/components/Center";
import Header from "@/components/Header";
import Title from "@/components/Title";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import styled from "styled-components";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { useContext } from "react";
import { CartContext } from "@/components/CartContext";
import ButtonLink from "@/components/ButtonLink";



const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;

// export default function ProductPage({ product }) {
//   const { addProduct } = useContext(CartContext);

//   const handleButtonClick = () => {
   
//    console.log('fliplink from MongoDB:', product.fliplink);
//     const fullUrl = product.fliplink.startsWith('http') ? product.fliplink : `https://${product.fliplink}`;
//     console.log('Full URL:', fullUrl);
//     window.open(fullUrl, '_blank');
//   };
//   const handleButtonClickAma = () => {
//     console.log('amzlink from MongoDB:', product.amzlink);
//     const fullUrl = product.amzlink.startsWith('http') ? product.amzlink : `https://${product.amzlink}`;
//     console.log('Full URL:', fullUrl);
//     window.open(fullUrl, '_blank');
//   };
  
  
  

//   return (
//     <>
//       <Header />
//       <Center>
//         <ColWrapper>
//           <WhiteBox>
//             <ProductImages images={product.images} />
//           </WhiteBox>
//           <div>
//             <Title>{product.title}</Title>
//             <p>{product.description}</p>
//             <PriceRow>
//               <div>
//                 <Price>${product.price}</Price>
//               </div>
//               <div>
//                 <Button primary onClick={handleButtonClick}>
//                   Buy From Flipcart
//                 </Button></div>
//                 <div>
//                 <Button primary onClick={handleButtonClickAma}>
//                   Buy From Amazon
//                 </Button>
//               </div>
//               <div>
//                 <Button primary onClick={() => addProduct(product._id)}>
//                   <CartIcon /> Add to cart
//                 </Button>
//               </div>
//             </PriceRow>
//           </div>
//         </ColWrapper>
//       </Center>
//     </>
//   );
// }

// export async function getServerSideProps(context) {
//   await mongooseConnect();
//   const { id } = context.query;
//   const product = await Product.findById(id);
//   return {
//     props: {
//       product: JSON.parse(JSON.stringify(product)),
//     },
//   };
// }



export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);

  const handleButtonClick = () => {
    const fullUrl = product.fliplink?.startsWith('http') ? product.fliplink : `https://${product.fliplink}`;
    window.open(fullUrl, '_blank');
  };

  const handleButtonClickAma = () => {
    const fullUrl = product.amzlink?.startsWith('http') ? product.amzlink : `https://${product.amzlink}`;
    window.open(fullUrl, '_blank');
  };

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages images={product.images} />
          </WhiteBox>
          <div>
            <Title>{product.title}</Title>
            <p>{product.description}</p>
            <PriceRow>
              <div>
                <Price>Rs {product.price}</Price>
              </div>
              {product.fliplink && (
                <div>
                  <Button primary onClick={handleButtonClick}>
                    Buy From Flipcart
                  </Button>
                </div>
              )}
              {product.amzlink && (
                <div>
                  <Button primary onClick={handleButtonClickAma}>
                    Buy From Amazon
                  </Button>
                </div>
              )}
              {!product.fliplink && !product.amzlink && (
                <div>
                  <Button primary onClick={() => addProduct(product._id)}>
                    <CartIcon /> Add to cart
                  </Button>
                </div>
              )}
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}


export async function getServerSideProps(context) {
  await mongooseConnect();
  const { id } = context.query;
  const product = await Product.findById(id);
  return {
    props: {
      product: JSON.parse(JSON.stringify(product)),
    },
  };
}