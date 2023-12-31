const express=require('express');
const app=express();
const connection=require('./config')
const categoryRouting=require('./Routing/categoryRouting')
const userRoutes=require('./router/categoryRouter')
const stripe = require("stripe")("sk_test_51OFItISCdgFzkvVr8YvTQo80pt3yeCOdoAXjBsgm3i7L4RDhkc6aSrujaJd3fK3XZ4EPaqZfeSCWWAK9yYJlSAfK00g8jNSDIE");
const cors=require("cors");
app.use(express.json())

app.use(cors({
    origin:"*" //acess anywhere
}))
app.use("/api",categoryRouting)
app.use("/api",userRoutes)
app.post("/paymentapi",async (req,res)=>{
 const {Alldata,total}=req.body
 console.log(Alldata,total)
 const lineItems = Alldata.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.heading,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity || 1,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "https://ornate-fudge-8600b5.netlify.app/",
    cancel_url: "https://ornate-fudge-8600b5.netlify.app/",
  });
  res.json({ id: session.id });
})
app.listen(4005, async()=>{
    try{
        await connection()
        console.log('server is running in port 4005')
    }
    catch(err){
        console.log('error found')
    }
});