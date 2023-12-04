const databaseurl="mongodb+srv://nishthayadav1122:nishthayadav1234@cluster0.bzudt2e.mongodb.net/udemy?retryWrites=true&w=majority"
const mongoose=require("mongoose");
const connection=async()=>{
    try{
        await mongoose.connect(databaseurl)
        console.log("connection made succesfully")
    }
    catch(err){
        console.log("error occured",err)
    }
}
module.exports=connection