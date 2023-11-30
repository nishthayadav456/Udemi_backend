const {homeControler}=require('../Routing/categoryController')
const categoryRouting=require("express").Router()
categoryRouting.get("/",homeControler)
module.exports=categoryRouting