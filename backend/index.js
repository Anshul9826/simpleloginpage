const connectToMongo = require('./db');
connectToMongo();
const express = require('express')
var cors= require('cors')
const app = express()
require("dotenv").config();
const port = process.env.PORT;
app.use(cors())
app.use(express.json())
//available routes
app.use('/api/auth', require('./routes/auth'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
