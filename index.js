const express= require("express");
const mongoose= require("mongoose");

const app=express();

mongoose.connect("mongodb+srv://nirmala:farms@nirmalafarms.lo3wjb1.mongodb.net/nirmalaFarms");
const vegSchema=new mongoose.Schema({
    _id:Number,
    name:String,
    price:Number
});
const Product=mongoose.model("products",vegSchema);

app.use(express.static("public"));
app.get("/",(req,res)=>{
    res.render("welcome.ejs");
});

app.get("/shop",(req,res)=>{
    Product.find({}).then(function(products){
        res.render("index.ejs", {products});
    }); 
});

app.listen(process.env.PORT || 3000,()=>{
    console.log("server running at port 3000");
});