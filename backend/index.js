const express = require('express')

const app = express()
const connectDB = require('./config/db')

const cors = require('cors')
app.use(cors({origin:true, credentials:true}))

//body parser
const bodyParser = require('body-parser')
app.use(express.json({extend:false}))
app.use(bodyParser.urlencoded({extended:true}))

// connecting to db
connectDB()
//connecting to routes
const User = require('./models/users')
//server
const port = 8000
app.listen(port , ()=> console.log(`server running on port ${port}`))
//api connections
const router = require('./routes/user')
app.use('/user',router)


