const postLogin = (req, res) => {
  console.log(req.body)
}

const postCreateAccount = (req, res) => {
  console.log(req.body)
  res.send("o")
}

module.exports = { postLogin, postCreateAccount }