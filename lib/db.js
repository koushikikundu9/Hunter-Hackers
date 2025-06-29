import mongoose from "mongoose";
const {username, password} = process.env;
export const mongoURl = `mongodb+srv://Kou:${password}@cluster0.2oyr5ox.mongodb.net/Contacts?retryWrites=true&w=majority&appName=Cluster0`;
