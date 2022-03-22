const mongoose = require('mongoose')
const app = require('./app')
const dotenv = require('dotenv')
// 
dotenv.config({path: './config.env'})

const DB = process.env.DATABASE_LOCAL

mongoose.connect(DB, {
  
}).then(conn =>{
  console.log(conn.connections)
})



const port = process.env || 5000;
app.listen(port, () => {
  console.log(`app running on port ${port}`);

});
// this is amazing

