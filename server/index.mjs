import express from 'express'
import db from './db.mjs'
import session from 'express-session'
import cors from 'cors'
import registerController from './routes/registerController.mjs'
import loginCon from './routes/loginController.mjs'
import formController from './routes/formController.mjs'
import roleController from './routes/roleController.mjs'
import historyController from './routes/historyController.mjs'
import contactController from './routes/contactController.mjs'
import auth from './routes/authUserController.mjs'
import team from './routes/teamController.mjs'

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
app.use('/api', historyController)
app.use('/api', contactController)
app.use('/api', auth)
app.use('/api', team)




//run server
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
    console.log('listening on http://localhost:8000')
})