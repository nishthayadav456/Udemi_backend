const {homeData, searchData,searchBar}=require('../Routing/categoryController')
const categoryRouting=require("express").Router()
categoryRouting.post("/homeData",homeData)
categoryRouting.get("/searchData",searchData)
categoryRouting.get("/searchbar",searchBar)
module.exports=categoryRouting