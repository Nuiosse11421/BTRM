import express from 'express'
import db from './db.mjs'
import session from 'express-session'
import cors from 'cors'
import registerController from './routes/registerController.mjs'
import loginCon from './routes/loginController.mjs'
import formController from './routes/formController.mjs'
import roleController from './routes/roleController.mjs'

const app = express()


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
}))
db()

app.get('/', (req, res) => {
    res.send('Hello from express backend')
    console.log("get/ complete")
})
//router
app.use('/api', registerController)
app.use('/api', loginCon)
app.use('/api', formController)
//http://localhost:8000/api to roleController
app.use('/api', roleController)




//run server
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
    console.log('listening on http://localhost:8000')
})