const {registerModel}=require('../Model/Model1')
const secretkey="nishtha"
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const salt=10
const Signup=async (req,res)=>{
const first=req.body
const newuser=await registerModel.findOne({email:first.email})
if(newuser){
    return res.send({mess:"user already registered"})
}
const hashpassword=bcrypt.hashSync(first.password,salt)
first.password=hashpassword
console.log(hashpassword)
 await registerModel.create(first)
  return res.send({mess:"user registered successfully"})
 
}
const Login=async(req,res)=>{
const second=req.body
const user=await registerModel.findOne({email:second.email})
if(user){
    const password=bcrypt.compare(user.password,second.password)
    if(password){
        const token=jwt.sign(second.email,secretkey)
        return res.send({mess:"user logged in successfully",token:token,name:user.name,email:user.email})
    }
    else{
       return res.send({mess:"wrong password"})
    }
}
else{
    return res.send({mess:"unauthorised user"})
}
}
module.exports={Signup,Login}