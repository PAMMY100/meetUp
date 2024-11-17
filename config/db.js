import mongoose from "mongoose";


const connectDB = async () => {
  try {
         await mongoose.connect(process.env.MONGO_URI)
         console.log("Database connected successfully.")
  } catch (error) {
    console.error("An error occured: ", error)
    process.exit(1);
  }
}

export default connectDB;