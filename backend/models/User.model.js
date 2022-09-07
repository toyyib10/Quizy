const mongoose = require("mongoose")

let userSchema = mongoose.Schema({
  firstname : {type: String, required:true},
  lastname : {type: String, required:true},
  email : {type: String, required:true, unique:true},
  password : {type: String, required:true}
})

let userModel = mongoose.model("User_tbs",userSchema)

module.exports = userModel;