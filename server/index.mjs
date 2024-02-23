import express from 'express'
import sequelize from './db.mjs'
import cors from 'cors'
import registerController from './routes/registerController.mjs'


const app = express()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello from express backend')
    console.log("get/ complete")
})
//router
app.use('/register', registerController)
const PORT = process.env.PORT || 8000;
app.listen(PORT,async()=>{
    console.log('listening on http://localhost:8000')
    try {
        await sequelize.sync();
        console.log('-----------Database synchronized----------------------');
      } catch (error) {
        console.error('Error synchronizing database:', error.message);
      }
})