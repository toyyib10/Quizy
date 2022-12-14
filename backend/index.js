const express = require("express")
const app = express()
app.use(express.urlencoded({ extended: true}));
const mongoose = require("mongoose")
require("dotenv").config()
const { mongooseConnect, expressConnect } = require("./controllers/Index.controller")
const auth = require("./routes/Auth.route")
const cors = require("cors")
const quizRoute = require("./routes/Quiz.route")

app.use(cors())
app.use(express.json({ limit: "100mb" }))

const URI = process.env.URI;
const PORT = process.env.PORT;

app.use("/auth", auth)
app.use("/quiz", quizRoute)
mongoose.connect(URI, mongooseConnect)


app.listen(PORT,expressConnect)