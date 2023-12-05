const mongoose=require('mongoose')
const cartuser=mongoose.Schema({
    id:Number,
    heading:String,
    image:String,
    category:String,
    rate:String,
    writer:String,
    student:Number,
    courses:Number
})
const learninguser=mongoose.Schema({
    id:Number,
    heading:String,
    image:String,
    category:String,
    rate:String,
    writer:String,
    student:Number,
    courses:Number
})
const cartModel=mongoose.model("cartdata",cartuser)
const learnModel=mongoose.model("learningdata",learninguser)
module.exports={cartModel,learnModel}