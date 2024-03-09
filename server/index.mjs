import express from 'express'
import db from './db.mjs'
import cors from 'cors'
import registerController from './routes/registerController.mjs'
import loginCon from './routes/loginController.mjs'
import formController from './routes/formController.mjs'


const app = express()

app.use(express.json())
app.use(cors())
db()
app.get('/',(req,res)=>{
    res.send('Hello from express backend')
    console.log("get/ complete")
})
//router
app.use('/register', registerController)
app.use('/login', loginCon)
app.use('/form', formController)




//run server
const PORT = process.env.PORT || 8000;
app.listen(PORT,async()=>{
    console.log('listening on http://localhost:8000')
})