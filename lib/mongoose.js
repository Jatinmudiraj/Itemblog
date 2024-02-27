import mongoose from 'mongoose';

export async function mongooseConnect() {
  if (mongoose.connection && mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri = process.env.MONGODB_URI || 'mongodb+srv://ecommerce:ecommerce123@cluster0.lmuh6xx.mongodb.net/?retryWrites=true&w=majority';
    if (!uri) {
      throw new Error('MongoDB URI is not provided.');
    }
    
    try {
      await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      return mongoose.connection;
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }
}
