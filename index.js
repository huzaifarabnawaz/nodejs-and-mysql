
const express=require("express")
const app=express()

app.listen(3500,(req,res)=>{
    console.log("port 3500 is runing ")
})



app.get("/",(req,res)=>{
    res.json("hello i am node rest api")
})