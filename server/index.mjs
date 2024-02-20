import express from 'express'
import db from './db.mjs'
import HomeController from './routes/HomeController.mjs'
const app = express()

app.use('/post', HomeController)

app.listen(8000,()=>{
    console.log('listening on http://localhost:8000')
})