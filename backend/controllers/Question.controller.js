const quizModel = require("../models/Question.model")

const addQuestion = (req, res) => {
  if (req.body.question.endsWith("?")) {
    res.send(req.body)
  } else {
    let { question, firstanswer, secondanswer, forthanswer, thirdanswer, correct } = req.body
    question = question + "?"
    let data = { question, firstanswer, secondanswer, forthanswer, thirdanswer, correct }
    res.send(data)
  }
}

const deleteQuestion = (req, res) => {
  const { allQuestion, ind } = req.body;
  const data = allQuestion.filter((item, index) => index != ind)
  res.send(data)
}

const saveQuiz = (req, res) => {
  let quizQuestion = req.body;
  let quiz = new quizModel(quizQuestion)
  quiz.save((err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      res.send(result)
    }
  })
}

module.exports = { addQuestion, deleteQuestion, saveQuiz}