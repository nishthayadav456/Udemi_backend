const userRoutes=require('express').Router()
const {Signup,Login}=require('../router/categoryControl')
userRoutes.post('/register',Signup)
userRoutes.post('/login',Login)
module.exports=userRoutes