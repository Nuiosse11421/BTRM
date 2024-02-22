import express from 'express'
import db from './db.mjs'
import cors from 'cors'
import registerController from './routes/registerController.mjs'
const app = express()
app.use(cors())



//router
app.use('/register', registerController)
app.listen(8000,()=>{
    console.log('listening on http://localhost:8000')
})