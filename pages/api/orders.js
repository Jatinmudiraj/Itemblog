// Import necessary modules and models
import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";

// Define the handler function for the endpoint
export default async function handler(req, res) {
  // Handle only PUT requests
  if (req.method !== 'PUT') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { orderId } = req.query; // Get the orderId from the request query parameters
  const { paid } = req.body; // Get the 'paid' field from the request body

  try {
    // Ensure Mongoose connection
    await mongooseConnect();

    // Find the order by its ID and update the 'paid' field
    const updatedOrder = await Order.findByIdAndUpdate(orderId, { paid }, { new: true });

    // If the order is not found, return a 404 error
    if (!updatedOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Return the updated order as the response
    res.status(200).json(updatedOrder);
  } catch (error) {
    // If an error occurs during the update process, return a 500 error
    console.error('Error updating order status:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
