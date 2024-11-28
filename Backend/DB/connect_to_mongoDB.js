import mongoose  from "mongoose";

const connectToMongoDB = async(req,res)=>{
    try {
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Connected To MongoDB");


        
    } catch (error) {
        console.log("Error in Connecting MongoDB",error.message);
        
    }
}

export default connectToMongoDB;