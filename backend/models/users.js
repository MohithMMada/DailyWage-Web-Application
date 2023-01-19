const mongoose = require("mongoose")
const registerSchema = new mongoose.Schema({                   //creating schema
  username:{
    type:String,
    required:true,
  },
  phone:{
    type:Number,
    required:true
  },
  wage:{
    type:Number,
    required:true
  },
  gender:{
    type:String,
    required:true,
  },
  skills:{
    type:String,
    required:true,
  },
  age:{
    type:Number,
    required:true
  }
  // password:{
  //   type:String,
  //   required:false
  // }
})
let User = mongoose.model('user', registerSchema)
module.exports = User 