// import { mongooseConnect } from "@/lib/mongoose";
// import { Product } from "@/models/Product";
// import { Order } from "@/models/Order";
// import Razorpay from 'razorpay';

// const razorpay = new Razorpay({
//   key_id: process.env.RAZORPAY_KEY_ID,
//   key_secret: process.env.RAZORPAY_KEY_SECRET,
// });

// export default async function handler(req, res) {
//   if (req.method === 'OPTIONS') {
//     // Handle preflight request
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     res.setHeader('Access-Control-Max-Age', '3600');
//     res.status(200).end();
//     return;
//   }

//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method Not Allowed' });
//   }

//   const {
//     name, email, city, postalCode, streetAddress, country, cartProducts,
//   } = req.body;

//   await mongooseConnect();

//   try {
//     const productsIds = cartProducts;
//     const uniqueIds = [...new Set(productsIds)];
//     const productsInfos = await Product.find({ _id: uniqueIds });

//     let line_items = [];
//     let totalAmount = 0;

//     for (const productId of uniqueIds) {
//       const productInfo = productsInfos.find(p => p._id.toString() === productId);
//       const quantity = productsIds.filter(id => id === productId)?.length || 0;
//       if (quantity > 0 && productInfo) {
//         const unitAmount = productInfo.price * 100; // Convert price to smallest currency unit
//         totalAmount += quantity * unitAmount;
//         line_items.push({
//           quantity,
//           price_data: {
//             currency: 'USD',
//             product_data: { name: productInfo.title },
//             unit_amount: unitAmount,
//           },
//         });
//       }
//     }

//     const orderDoc = await Order.create({
//       line_items, name, email, city, postalCode,
//       streetAddress, country, paid: false,
//     });

//     // Create a Razorpay order
//     const razorpayOrder = await razorpay.orders.create({
//       amount: totalAmount,
//       currency: 'USD',
//       receipt: orderDoc._id.toString(),
//       payment_capture: 1, // Auto-capture payment when order is created
//     });

//     // Send the order ID and Razorpay order ID back to the client
//     res.status(200).json({ orderId: orderDoc._id.toString(), razorpayOrderId: razorpayOrder.id });

//   } catch (error) {
//     console.error('Error during checkout:', error);
//     return res.status(500).json({ message: 'Internal Server Error' });
//   }
// }


import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import { Order } from "@/models/Order";

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    // Handle preflight request
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Max-Age', '3600');
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const {
    name, email, city, postalCode, streetAddress, country, phoneNumber, imageUrl, cartProducts,
  } = req.body;

  await mongooseConnect();

  try {
    const productsIds = cartProducts;
    const uniqueIds = [...new Set(productsIds)];
    const productsInfos = await Product.find({ _id: uniqueIds });

    let line_items = [];
    let totalAmount = 0;

    for (const productId of uniqueIds) {
      const productInfo = productsInfos.find(p => p._id.toString() === productId);
      const quantity = productsIds.filter(id => id === productId)?.length || 0;
      if (quantity > 0 && productInfo) {
        const unitAmount = productInfo.price * 100; // Convert price to smallest currency unit
        totalAmount += quantity * unitAmount;
        line_items.push({
          quantity,
          price_data: {
            currency: 'USD',
            product_data: { name: productInfo.title },
            unit_amount: unitAmount,
          },
        });
      }
    }

    const orderDoc = await Order.create({
      line_items,
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      phoneNumber, // Added phone number
      imageUrl, // Added image URL
      paid: false,
    });

    // Send the order ID back to the client
    res.status(200).json({ orderId: orderDoc._id.toString() });

  } catch (error) {
    console.error('Error during checkout:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
