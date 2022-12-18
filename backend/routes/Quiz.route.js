const express = require("express")
const router = express.Router()
const { addQuestion, deleteQuestion, saveQuiz, savePin, getQuiz } = require("../controllers/Quiz.controller")

router.post("/addQuestion", addQuestion)

router.post("/deleteQuestion", deleteQuestion)

router.post("/saveQuiz", saveQuiz)

router.post("/savePin", savePin)

router.post("/getQuiz", getQuiz)

module.exports = router;