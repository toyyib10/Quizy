const userModel = require("../models/User.model")
const postLogin = (req, res) => {
  console.log(req.body)
}

const postCreateAccount = (req, res) => {
  console.log(req.body)
  const eMail = req.body.email
  const userDetails = req.body
  userModel.findOne({ email: eMail }, (err, result) => {
    if (err) {
      res.status(501).send({ message: "Internal Server Error", Status: false });
    } else {
      if (result) {
        res.send({ message: "Email already exists", status: false });
      } else {
        let form = userModel(userDetails);

        form.save((err) => {
          if (err) {
            res.status(501).send({ message: "Unable to sign up try again later", Status: false });
          } else {
            res.send({ message: "", status: true });
          }
        })
      }
    }
  })
}

module.exports = { postLogin, postCreateAccount }