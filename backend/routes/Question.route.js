const express = require("express")
const router = express.Router()
const { addQuestion, deleteQuestion, saveQuiz } = require("../controllers/Question.controller")

router.post("/addQuestion", addQuestion)

router.post("/deleteQuestion", deleteQuestion)

router.post("/saveQuiz", saveQuiz)

module.exports = router;