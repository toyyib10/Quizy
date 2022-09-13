const mongoose = require("mongoose")

const questionSchema = mongoose.Schema({
  question: String,
  firstanswer: String,
  firstcorrect: String,
  secondanswer: String,
  secondcorrect: String,
  thirdanswer: String,
  thirdcorrect: String,
  forthanswer: String,
  forthcorrect: String,
  email: String,
})