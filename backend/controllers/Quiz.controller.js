const quizModel = require("../models/Quiz.model")

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

const savePin = (req, res) => {
  let pin = req.body.pin;
  let id = req.body.id;
  console.log(pin)
  quizModel.findOneAndUpdate({ _id: id }, {pin}, (err, result) => {
    if (result) {
      res.send({ status: true })
    } else {
      res.send({ status: false })
    }
  })
}

const getQuiz = (req, res) => {
  const userPin = req.body.pin;
  quizModel.findOne({ pin : userPin }, (err, result) => {
    if (result) {
      res.status(200).send(result)
      console.log(result)
    } else {
      res.status(400).send({err:"Unable to fetch result"})
    }
  })
}

module.exports = { addQuestion, deleteQuestion, saveQuiz, savePin, getQuiz}