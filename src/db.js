import mongoos from "mongoose"
/* LB1PJYyofIFz5dIA ojo */
export const connectDB = async () => {
    try {
        await mongoos.connect("mongodb+srv://kabir02091999:LB1PJYyofIFz5dIA@cluster0.lnqdgqx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
          console.log("MongoDB connected successfully") 
      } catch (error) { console.error("Error connecting to MongoDB:", error);

      }}
