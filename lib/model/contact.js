// models/Contact.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

export const Contact = mongoose.models.contact || mongoose.model("contact", contactSchema);