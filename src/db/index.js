 import mongoose from "mongoose";
 import { DB_NAME } from "../constants.js";

 const connectToDatabase = async () => {
    try {
       const connectionInstance =await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(`Connected to MongoDB at ${connectionInstance.connection.host}:${connectionInstance.connection.port}/${DB_NAME}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
 }

export default connectToDatabase;