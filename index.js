require("dotenv").config();
const express = require('express')
const mongoose = require('mongoose')
const userRouters = require('./routes/user')
mongoose.connect(process.env.url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
let app = express()
const port = process.env.PORT || 3000
app.use(express.json());
app.use('/user', userRouters)
app.use(require('body-parser').urlencoded({ extended: true }));



app.listen(port, () => console.log(`Express server currently running on port ${port}`)) 