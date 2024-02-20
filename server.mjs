import bodyParser from "body-parser"
import express from "express"
import cors from 'cors'
const app = express()

const PORT = 8000

app.use(bodyParser.json())
app.use(cors())

app.get('/api/datatest',(req,res)=>{
    res.json({message:'Back-end working!'})
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})
