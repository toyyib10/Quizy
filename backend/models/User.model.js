const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

let userSchema = mongoose.Schema({
  firstname : {type: String, required:true},
  lastname : {type: String, required:true},
  email : {type: String, required:true, unique:true},
  password : {type: String, required:true}
})

userSchema.pre("save", function (next) {
  const saltRound = 10;
  bcrypt.hash(this.password, saltRound, (err, hashedPassword) => {
    if (err) {
      console.log(err)
    } else {
      this.password = hashedPassword
      next()
    }
  })
})

userSchema.methods.authenticateUser = function (password,callback) {
  bcrypt.compare(password, this.password, (err, check) => {
    if (!err) {
      callback(err,check)
    } else {
      next()
    }
  })
}
let userModel = mongoose.model("User_tbs",userSchema)

module.exports = userModel;