const mongoose = require('mongoose')
const config = require('config')
const db = config.get("mongoURI")
const connectDB = async() =>{
  try{
    await mongoose.connect(db, {useNewUrlParser : true})
    console.log("Connected to db")
  }
  catch(err){
    console.error(err)
  } 
}
module.exports = connectDB