const mongoose = require("mongoose")

const quizSchema = mongoose.Schema({
  allQuestion: Array,
  quizTime: String,
  quizName: String,
  email: String
})

let quizModel = mongoose.model("quiz_tbs",quizSchema)

module.exports = quizModel;