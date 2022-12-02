const mongoose = require("mongoose")

const quizSchema = mongoose.Schema({
  questions: Array,
  seconds: String,
  quizName: String
})

let quizModel = mongoose.model("quiz_tbs",quizSchema)

module.exports = quizModel;