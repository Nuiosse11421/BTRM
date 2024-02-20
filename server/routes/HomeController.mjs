import express from 'express'
const route = express()

route.get("/",(req,res)=>{
    res.send('Welcome')
})

export default route