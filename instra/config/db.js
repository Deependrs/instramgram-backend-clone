import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    if (mongoose.connection.readyState === 1) {
      console.log('Connected to MongoDB');
    } else {
      console.log('Failed to connect to MongoDB');
    }
  } catch (error) {
    console.log('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
