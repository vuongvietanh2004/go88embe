import mongoose from "mongoose";

const houseSchema=mongoose.Schema({
    name:String,
    price:Number,
    category:String,
    image:String,
    title:String,
    location:String,
})
const House = mongoose.model("House", houseSchema);

export default House;