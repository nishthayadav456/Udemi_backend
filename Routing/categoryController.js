const {store}=require('../Model/Model')
const {Home}=require('../contextData')

const homeData=async(req,res)=>{
    try{
        const first=await store.create(Home)
        res.send(first)
    }
    catch(err){
        res.status(500).send({err:err.message})
    }
    
    } 

const searchData=async(req,res)=>{
 
        const second=await store.find({})
        res.send(second)
  
   
}
    module.exports={homeData,searchData}