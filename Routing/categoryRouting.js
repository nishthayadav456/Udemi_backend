const {homeData, searchData}=require('../Routing/categoryController')
const categoryRouting=require("express").Router()
categoryRouting.post("/homeData",homeData)
categoryRouting.get("/searchData",searchData)

module.exports=categoryRouting