const mongoose=require("mongoose")
const userSchmea=mongoose.Schema({
    id:Number,
    heading:String,
    image:String,
    category:String,
    rate:String,
    writer:String,
    student:Number,
    courses:Number,
    price:Number
})
const store=mongoose.model("Data",userSchmea);
module.exports={store}