import mongoos from "mongoose"
import { password } from "./config.js";
export const connectDB = async () => {
  try {
    await mongoos.connect(`mongodb+srv://kabir02091999:${password}@cluster0.lnqdgqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);
      console.log("MongoDB connected successfully") 
    } catch (error) { console.error("Error connecting to MongoDB:", error);}
  }
