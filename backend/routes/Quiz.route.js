const express = require("express")
const router = express.Router()
const { addQuestion, deleteQuestion, saveQuiz, savePin } = require("../controllers/Quiz.controller")

router.post("/addQuestion", addQuestion)

router.post("/deleteQuestion", deleteQuestion)

router.post("/saveQuiz", saveQuiz)

router.post("/savePin", savePin)

module.exports = router;