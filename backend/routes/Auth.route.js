const express = require("express")
const router = express.Router()

const {postLogin, postCreateAccount, getDashboard} = require("../controllers/Auth.controller")

router.post("/login",postLogin)

router.post("/createaccount", postCreateAccount)

router.get("/dashboard", getDashboard)

module.exports = router;