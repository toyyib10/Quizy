const express = require("express")
const router = express.Router()

const {postLogin, postCreateAccount} = require("../controllers/Auth.controller")

router.post("/login",postLogin)

router.post("/createaccount", postCreateAccount)

module.exports = router;