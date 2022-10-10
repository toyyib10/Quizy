const express = require("express")
const router = express.Router()

router.post("/game", (req, res) => {
  if (req.body.question.endsWith("?")) {
    res.send(req.body)
  } else {
    let { question, firstanswer, secondanswer, forthanswer, thirdanswer, correct } = req.body
    question = question + "?"
    let data = { question, firstanswer, secondanswer, forthanswer, thirdanswer, correct }
    res.send(data)
  }
})

module.exports = router;