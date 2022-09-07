const express = require("express")
const app = express()
const mongoose = require("mongoose")

const URI = "mongodb+srv://toyyib:toyyib10@cluster0.c6xilee.mongodb.net/class?retryWrites=true&w=majority"
mongoose.connect(URI, (err) => {
  if(err){
    console.log("Unable to start")
  } else {
    console.log("Mongoose")
  }
})


app.listen(5000, () => {
  console.log("server started")
})