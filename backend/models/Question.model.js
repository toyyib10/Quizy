const mongoose = require("mongoose")

const questionSchema = mongoose.Schema({
  question: String,
  firstanswer: String,
  secondanswer: String,
  thirdanswer: String,
  forthanswer: String,
  email: String,
  correct: String,
})