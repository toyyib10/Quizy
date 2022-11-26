const express = require("express")
const router = express.Router()

router.post("/game/addQuestion", (req, res) => {
  if (req.body.question.endsWith("?")) {
    res.send(req.body)
  } else {
    let { question, firstanswer, secondanswer, forthanswer, thirdanswer, correct } = req.body
    question = question + "?"
    let data = { question, firstanswer, secondanswer, forthanswer, thirdanswer, correct }
    res.send(data)
  }
})

router.post("/game/deleteQuestion", (req, res) => {
  const { allQuestion, ind } = req.body;
  const data = allQuestion.filter((item, index) => index != ind)
  res.send(data)
})

module.exports = router;