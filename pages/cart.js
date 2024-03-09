// import Header from "@/components/Header";
// import styled from "styled-components";
// import Center from "@/components/Center";
// import Button from "@/components/Button";
// import { useContext, useEffect, useState } from "react";
// import { CartContext } from "@/components/CartContext";
// import axios from "axios";

// import Table from "@/components/Table";
// import Input from "@/components/Input";
// import { load } from 'razorpay';

// import Razorpay from 'razorpay';

// const ColumnsWrapper = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   @media screen and (min-width: 768px) {
//     grid-template-columns: 1.2fr .8fr;
//   }
//   gap: 40px;
//   margin-top: 40px;
// `;

// const Box = styled.div`
//   background-color: #fff;
//   border-radius: 10px;
//   padding: 30px;
// `;

// const ProductInfoCell = styled.td`
//   padding: 10px 0;
// `;

// const ProductImageBox = styled.div`
//   width: 70px;
//   height: 100px;
//   padding: 2px;
//   border: 1px solid rgba(0, 0, 0, 0.1);
//   display:flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 10px;
//   img {
//     max-width: 60px;
//     max-height: 60px;
//   }
//   @media screen and (min-width: 768px) {
//     padding: 10px;
//     width: 100px;
//     height: 100px;
//     img {
//       max-width: 80px;
//       max-height: 80px;
//     }
//   }
// `;

// const QuantityLabel = styled.span`
//   padding: 0 15px;
//   display: block;
//   @media screen and (min-width: 768px) {
//     display: inline-block;
//     padding: 0 10px;
//   }
// `;

// const CityHolder = styled.div`
//   display:flex;
//   gap: 5px;
// `;

// export default function CartPage() {
//   const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);
//   const [products, setProducts] = useState([]);
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [city, setCity] = useState('');
//   const [postalCode, setPostalCode] = useState('');
//   const [streetAddress, setStreetAddress] = useState('');
//   const [country, setCountry] = useState('');
//   const [orderId, setOrderId] = useState('');
//   // const [razorpayOrderId, setRazorpayOrderId] = useState('');
//   // const [razorpayKey, setRazorpayKey] = useState('');
//   // const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);
  
//   useEffect(() => {
//     if (cartProducts.length > 0) {
//       axios.post('/api/cart', { ids: cartProducts })
//         .then(response => {
//           setProducts(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching cart products:', error);
//         });
//     } else {
//       setProducts([]);
//     }
//   }, [cartProducts]);

//   // async function goToPayment() {
//   //   try {
//   //     const response = await axios.post('/api/checkout', {
//   //       name,
//   //       email,
//   //       city,
//   //       postalCode,
//   //       streetAddress,
//   //       country,
//   //       cartProducts,
//   //     });
  
//   //     const { orderId, razorpayOrderId, razorpayKey } = response.data;
//   //     setOrderId(orderId);
//   //     setRazorpayOrderId(razorpayOrderId); // Set the Razorpay order ID
//   //     setRazorpayKey(razorpayKey);
  
//   //     if (!razorpayOrderId) {
//   //       console.error('Error: razorpayOrderId is not available');
//   //       return; // Exit the function if razorpayOrderId is not available
//   //     }
  
//   //     const totalAmount = calculateTotal(); // Assign the calculated total to totalAmount
  
//   //     const options = {
//   //       key_id: "rzp_test_xCfQsOPIdSseEO",
//   //       amount: totalAmount * 100, // Convert total to smallest currency unit
//   //       currency: 'USD',
//   //       name: 'Item blog',
//   //       description: 'Payment for your order',
//   //       order_id: razorpayOrderId,
//   //       handler: async function (response) {
//   //         console.log('Payment successful:', response);
//   //         setIsPaymentSuccess(true);
//   //         clearCart(); // Clear cart after successful payment
  
//   //         // Add data to the database after successful payment
//   //         try {
//   //           await axios.post('/api/addToDatabase', {
//   //             name,
//   //             email,
//   //             city,
//   //             postalCode,
//   //             streetAddress,
//   //             country,
//   //             cartProducts,
//   //             orderId: response.notes.orderId, // Assuming orderId is passed in the response notes
//   //             paymentId: response.razorpay_payment_id, // Get the payment ID from response
//   //           });
//   //           console.log('Data added to the database successfully.');
//   //         } catch (error) {
//   //           console.error('Error adding data to the database:', error);
//   //         }
          
//   //         // Optionally, redirect or show a success message
//   //       },
//   //       prefill: {
//   //         name,
//   //         email,
//   //       },
//   //       notes: {
//   //         orderId,
//   //       },
//   //       theme: {
//   //         color: '#F37254',
//   //       },
//   //       payment_capture: 1,
//   //     };
  
//   //     // Redirect to the Razorpay checkout page
//   //     window.location.href = `https://api.razorpay.com/v1/checkout/embedded?order_id=${razorpayOrderId}&key_id=${options.key_id}&currency=${options.currency}&amount=${options.amount}&payment_capture=${options.payment_capture}`;
//   //   } catch (error) {
//   //     console.error('Error during payment:', error);
//   //     // You can display a user-friendly error message or handle the error in any appropriate way
//   //   }
//   // }
  
  



//   async function goToPayment() {
//     try {
//         // Send order details to backend to handle payment processing or storage
//         const response = await axios.post('/api/checkout', {
//             name,
//             email,
//             city,
//             postalCode,
//             streetAddress,
//             country,
//             cartProducts,
//         });

//         // Assuming response.data contains necessary order information

//         // Add order data to the database
//         try {
//             await axios.post('/api/addToDatabase', {
//                 name,
//                 email,
//                 city,
//                 postalCode,
//                 streetAddress,
//                 country,
//                 cartProducts,
//                 orderId: response.data.orderId, // Assuming orderId is returned from backend
//                 // You can add more order details here if needed
//             });
//             console.log('Data added to the database successfully.');
//         } catch (error) {
//             console.error('Error adding data to the database:', error);
//             // Handle error
//         }

//         // Optionally, redirect or show a success message

//     } catch (error) {
//         console.error('Error during payment:', error);
//         // You can display a user-friendly error message or handle the error in any appropriate way
//     }
// }

  
  
  
//   function lessOfThisProduct(id) {
//     removeProduct(id);
//   }

//   function moreOfThisProduct(id) {
//     addProduct(id);
//   }
  
//   function calculateTotal() {
//     let total = 0;
//     for (const productId of cartProducts) {
//       const price = products.find(p => p._id === productId)?.price || 0;
//       total += price;
//     }
//     return total;
//   }

//   return (
//     <>
//       <Header />
//       <Center>
//         <ColumnsWrapper>
//           <Box>
//             <h2>Cart</h2>
//             {!cartProducts?.length && (
//               <div>Your cart is empty</div>
//             )}
//             {products?.length > 0 && (
//               <Table>
//                 <thead>
//                   <tr>
//                     <th>Product</th>
//                     <th>Quantity</th>
//                     <th>Price</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {products.map(product => (
//                     <tr key={product._id}>
//                       <ProductInfoCell>
//                         <ProductImageBox>
//                           <img src={product.images[0]} alt=""/>
//                         </ProductImageBox>
//                         {product.title}
//                       </ProductInfoCell>
//                       <td>
//                         <Button
//                           onClick={() => lessOfThisProduct(product._id)}>-</Button>
//                         <QuantityLabel>
//                           {cartProducts.filter(id => id === product._id).length}
//                         </QuantityLabel>
//                         <Button
//                           onClick={() => moreOfThisProduct(product._id)}>+</Button>
//                       </td>
//                       <td>
//                         ${cartProducts.filter(id => id === product._id).length * product.price}
//                       </td>
//                     </tr>
//                   ))}
//                   <tr>
//                     <td></td>
//                     <td></td>
//                     <td>${calculateTotal()}</td>
//                   </tr>
//                 </tbody>
//               </Table>
//             )}
//           </Box>
//           {!!cartProducts?.length && (
//             <Box>
//               <h2>Order information</h2>
//               <Input type="text"
//                      placeholder="Name"
//                      value={name}
//                      name="name"
//                      onChange={ev => setName(ev.target.value)} />
//               <Input type="text"
//                      placeholder="Email"
//                      value={email}
//                      name="email"
//                      onChange={ev => setEmail(ev.target.value)}/>
//               <CityHolder>
//                 <Input type="text"
//                        placeholder="City"
//                        value={city}
//                        name="city"
//                        onChange={ev => setCity(ev.target.value)}/>
//                 <Input type="text"
//                        placeholder="Postal Code"
//                        value={postalCode}
//                        name="postalCode"
//                        onChange={ev => setPostalCode(ev.target.value)}/>
//               </CityHolder>
//               <Input type="text"
//                      placeholder="Street Address"
//                      value={streetAddress}
//                      name="streetAddress"
//                      onChange={ev => setStreetAddress(ev.target.value)}/>
//               <Input type="text"
//                      placeholder="Country"
//                      value={country}
//                      name="country"
//                      onChange={ev => setCountry(ev.target.value)}/>
//               <Button black block
//                       onClick={goToPayment}>
//                 Continue to payment
//               </Button>
//             </Box>
//           )}
//         </ColumnsWrapper>
//       </Center>
//     </>
//   );
// }



import Header from "@/components/Header";
import styled from "styled-components";
import Center from "@/components/Center";
import Button from "@/components/Button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";

import Table from "@/components/Table";
import Input from "@/components/Input";

const ColumnsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 1.2fr .8fr;
  }
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
`;

const ProductImageBox = styled.div`
  width: 70px;
  height: 100px;
  padding: 2px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  display:flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img {
    max-width: 60px;
    max-height: 60px;
  }
  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 100px;
    height: 100px;
    img {
      max-width: 80px;
      max-height: 80px;
    }
  }
`;

const QuantityLabel = styled.span`
  padding: 0 15px;
  display: block;
  @media screen and (min-width: 768px) {
    display: inline-block;
    padding: 0 10px;
  }
`;

const CityHolder = styled.div`
  display:flex;
  gap: 5px;
`;




export default function CartPage() {
  const { cartProducts, addProduct, removeProduct, clearCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [orderId, setOrderId] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  
  useEffect(() => {
    if (cartProducts.length > 0) {
      axios.post('/api/cart', { ids: cartProducts })
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error('Error fetching cart products:', error);
        });
    } else {
      setProducts([]);
    }
  }, [cartProducts]);





  async function uploadToS3(file) {
    try {
      const formData = new FormData();
      formData.append('file', file);
  
      // Make a POST request to your server or directly to S3 to upload the image
      const response = await fetch('/api/uploadImage', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
      
      // Extract the image URL from the response
      const data = await response.json();
      const imageUrl = data.imageUrl; // Assuming imageUrl is returned from the server
      return imageUrl;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }
  async function uploadImageToS3(image) {
    const formData = new FormData();
    formData.append('file', image);
    try {
      const response = await axios.post('/api/uploadImage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data.links[0];
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }

  // function handleImageUpload(file) {
  //   uploadToS3(file)
  //     .then(url => {
  //       setImageUrl(url);
  //     })
  //     .catch(error => {
  //       console.error('Error uploading image:', error);
  //     });
  // }

  async function goToPayment() {
    try {
      // Check if an image has been uploaded
      if (!imageUrl) {
        throw new Error('Please upload an image');
      }
      
      // Proceed to payment only if imageUrl is available
      console.log('Proceeding to payment...');
  
      // Send order details along with the uploaded image URL to the backend for payment processing
      const response = await axios.post('/api/checkout', {
        name,
        email,
        city,
        postalCode,
        streetAddress,
        country,
        phoneNumber,
        imageUrl, // Include the uploaded image URL
        cartProducts,
      });
    
      console.log('Order placed successfully:', response.data);
    
      // Clear the cart after placing the order
      clearCart();
    
      // Optionally, redirect or show a success message
    
    } catch (error) {
      console.error('Error during payment:', error);
    }
  }
  
  
  
  async function handleImageUpload(file) {
    try {
      const formData = new FormData();
      formData.append('file', file);
  
      // Make a POST request to upload the image
      const response = await fetch('/api/uploadImage', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }
      
      // Extract the image URL from the response
      const data = await response.json();
      const imageUrl = data.links[0]; // Assuming imageUrl is returned from the server
      setImageUrl(imageUrl); // Set the imageUrl state with the uploaded image URL
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }
  
  
  
  
  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function calculateTotal() {
    let total = 0;
    for (const productId of cartProducts) {
      const price = products.find(p => p._id === productId)?.price || 0;
      total += price;
    }
    return total;
  }

  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            {!cartProducts?.length && (
              <div>Your cart is empty</div>
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
                          <img src={product.images[0]} alt=""/>
                        </ProductImageBox>
                        {product.title}
                      </ProductInfoCell>
                      <td>
                        <Button
                          onClick={() => lessOfThisProduct(product._id)}>-</Button>
                        <QuantityLabel>
                          {cartProducts.filter(id => id === product._id).length}
                        </QuantityLabel>
                        <Button
                          onClick={() => moreOfThisProduct(product._id)}>+</Button>
                      </td>
                      <td>
                        ${cartProducts.filter(id => id === product._id).length * product.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>${calculateTotal()}</td>
                  </tr>
                </tbody>
              </Table>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <h2>Order information</h2>
              <Input type="text"
                     placeholder="Name"
                     value={name}
                     name="name"
                     onChange={ev => setName(ev.target.value)} />
              <Input type="text"
                     placeholder="Email"
                     value={email}
                     name="email"
                     onChange={ev => setEmail(ev.target.value)}/>
              <Input type="text"
                     placeholder="Phone Number"
                     value={phoneNumber}
                     name="phoneNumber"
                     onChange={ev => setPhoneNumber(ev.target.value)}/>
              <CityHolder>
                <Input type="text"
                       placeholder="City"
                       value={city}
                       name="city"
                       onChange={ev => setCity(ev.target.value)}/>
                <Input type="text"
                       placeholder="Postal Code"
                       value={postalCode}
                       name="postalCode"
                       onChange={ev => setPostalCode(ev.target.value)}/>
              </CityHolder>
              <Input type="text"
                     placeholder="Street Address"
                     value={streetAddress}
                     name="streetAddress"
                     onChange={ev => setStreetAddress(ev.target.value)}/>
              <Input type="text"
                     placeholder="Country"
                     value={country}
                     name="country"
                     onChange={ev => setCountry(ev.target.value)}/>
                    <>Add Payment Proof</>
              <Input type="file" accept="image/*" onChange={ev => handleImageUpload(ev.target.files[0])} />
              <Button black block
                      onClick={goToPayment}>
                Continue to payment
              </Button>
              <img src="/youtube.png" alt="Scan and pay" width={138} height={138}/>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
