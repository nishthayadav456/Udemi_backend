const {store}=require('../Model/Model')
const { cartModel, learnModel } = require('../Model/Model1')
const {Home}=require('../contextData')

const homeData=async(req,res)=>{
 const first=await store.create(Home)
res.send(first)
 } 
 
const searchData=async(req,res)=>{
 const second=await store.find({})
res.send(second)
}

const cartData=async(req,res)=>{
    const data=req.body
    const cart=await cartModel.create(data)
    res.send(cart)
    
}
const Addtocartfind=async(req,res)=>{
    const cartfind=await cartModel.find({})
    res.send(cartfind)
}
const postLearning=async(req,res)=>{
    const learndata=req.body
    const learningdata=await learnModel.create(learndata)
    res.send(learningdata)
    

}
const getLearning=async(req,res)=>{
    const getlearn=await learnModel.find({})
    res.send(getlearn)
}
const deletecart=async(req,res)=>{
    const deletedata=await cartModel.deleteMany({})
    res.send(deletedata)
}
const searchBar=async (req,res)=>{
    const{category}=req.query;
    const queryobj={};
    if(category){
        queryobj.category={$regex:category,$options:"i"};
    }
    try{
        const finds=await store.find(queryobj);
        res.send(finds)
    }
    catch(error){
        console.error("Error fetching data:", error);
        res.status(500).send("Internal Server Error");
    }
}
    module.exports={homeData,searchData,searchBar,cartData,postLearning,getLearning,Addtocartfind,deletecart}