const mongoose=require('mongoose')
const cartuser=mongoose.Schema({
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
const learninguser=mongoose.Schema({
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

const register=mongoose.Schema({
    name:String,
   email:String,
   password:String

})
const cartModel=mongoose.model("cartdata",cartuser)
const learnModel=mongoose.model("learningdata",learninguser)
const registerModel=mongoose.model("register",register)
module.exports={cartModel,learnModel,registerModel}