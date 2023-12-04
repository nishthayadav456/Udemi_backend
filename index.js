const express=require('express');
const app=express();
const connection=require('./config')
const categoryRouting=require('./Routing/categoryRouting')
const cors=require("cors");
app.use(cors({
    origin:"*" //acess anywhere
}))
app.use("/api",categoryRouting)
app.listen(4005, async()=>{
    try{
        await connection()
        console.log('server is running in port 4005')
    }
    catch(err){
        console.log('error found')
    }
});