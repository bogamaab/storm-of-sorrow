const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const parse = require('body-parser')

require('dotenv').config()

// const __Routes = require('./routes/__')


app.use(parse.urlencoded({ extended: false }))
app.use(parse.json())

// app.use("/api", __Routes)

app.use(express.json())

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error))

app.listen(port, () => {
    console.log(`Beer app listening on port ${port}`)
})
