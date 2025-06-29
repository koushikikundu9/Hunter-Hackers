import mongoose from "mongoose";
const {username, password} = process.env;
export const mongoURl = 'mongodb+srv://Kou:Kou@#204@cluster0.2oyr5ox.mongodb.net/Contact?retryWrites=true&w=majority&appName=Cluster0';
export async function connectDB() {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(mongoURl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("✅ MongoDB connected");
    }
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}