import mongoose from "mongoose";
//mongoose is a Object Data modeling library for mongodb that provides validation for schema and translation between the objects in code and the representation of those objects in MongoDB.
const connectDB = async () => {
  const URL = process.env.MONGO_URI;
  var connection = false
  try {
    let conn;
    if (!connection) {
      conn = await mongoose.connect(URL, {
        //the mongoose.connect() method returns a promise
      });
      connection = true;
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } else {
      console.log("Already connected to MongoDB");
    }
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
