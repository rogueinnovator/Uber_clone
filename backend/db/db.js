import mongoose from "mongoose";
//mongoose is a Object Data modeling library for mongodb that provides validation for schema and translation between the objects in code and the representation of those objects in MongoDB.
const connectDB = async () => {
  const URL = process.env.MONGO_URI;
  try {
    const conn = await mongoose.connect(URL, {
      //the cmongoose.connect() method returns a promise
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
