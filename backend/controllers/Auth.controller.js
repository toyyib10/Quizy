const userModel = require("../models/User.model")
const jwt = require("jsonwebtoken")
const secret = process.env.SECRET
const postLogin = (req, res) => {
  let eMail = req.body.email
  let password = req.body.password
  userModel.findOne({ email: eMail }, (err, user) => {
    if (err) {
      res.status(501).send({ message: "Unable to log in", status:false})
    } else {
      if (user) {
        user.authenticateUser(password, (err, check) => {
          if (err) {
            res.status(501).send({message:"Unable to log in "})
          } else {
            if (check) {
              let token = jwt.sign({eMail}, secret, {expiresIn:"4h"})
              res.status(200).send({message:"", token, status:true})
            } else {
              res.send({message:"Incorrect password", status:false})
            }
          }
        })
      } else {
        res.send({ message: "Invalid email", status:false})
      }
    }
  })
}

const postCreateAccount = (req, res) => {
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

const getDashboard = (req, res) => {
  const [, token] = req.headers.authorization.split(" ")
  jwt.verify(token, secret, (err,result) => {
    if (err) {
      res.send({ message : "err occured"})
    } else {
      let email = result.eMail;
      res.send({email, status: true})
    }
  })
}

module.exports = { postLogin, postCreateAccount,getDashboard}