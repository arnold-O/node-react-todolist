const fs = require("fs");
const express = require("express");
const tasksRouter = require('./routes/tasksRoutes')
const cors = require('cors')


const app = express();



app.use(express.json());

app.use(cors({
    origin:"http://localhost:3000"
}))



app.use('/todolist', tasksRouter)

 
// listen to particular port and server
module.exports = app
