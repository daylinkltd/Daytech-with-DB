import mongoose, { connect } from "mongoose";


const connectDB = async () => {
  try{
    await mongoose.connect(process.env.DB);
  }catch(error) {
    console.log(error + "Error Connecting to Database")

  }
}

export default connectDB;
