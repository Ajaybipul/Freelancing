import mongoose from "mongoose";

const connect=()=>{
    try {
         mongoose.connect('mongodb://localhost:27017/Freelancing')
        console.log("Database connected");
        
    } catch (error) {
        console.log("Database connection failed due to", error);
        process.exit(1);
    }
   
    
}

export default connect