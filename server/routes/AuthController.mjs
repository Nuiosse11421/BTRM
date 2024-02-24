import express from "express";
const route = express.Router()

route.get('/',(req,res)=>{
    res.render('Hello world')
})

export default route