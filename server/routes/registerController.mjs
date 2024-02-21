// use /reigster/api/createUser to use registered form
import express from 'express'
const routers = express()


routers.post("/api/createUser", async(req,res)=>{
    try{

    }catch(err){
        console.error(err.message)
    }
})

export default routers