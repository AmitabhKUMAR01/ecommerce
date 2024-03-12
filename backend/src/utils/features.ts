import mongoose, { mongo } from "mongoose";

export const connectDB = async () => {
    mongoose.connect("mongodb://localhost:27017",{
        dbName:"Ecommerce24",
    }).then((res)=>console.log("db connected "))
    .catch((err)=>console.log("error connecting database"))
}