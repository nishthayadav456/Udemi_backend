const {Home}=require('../contextData')
const homeControler=(req,res)=>{
    return res.send(Home)
    } 
    module.exports={homeControler}