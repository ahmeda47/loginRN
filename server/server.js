// const express = require('express')
// const app = express()
// const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded())

// parse application/json
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.json({'message': "welcome to the backend"})
    console.log(req.body)
})

app.post('/',(req,res)=>{
    res.json({'type':'Post'})
    console.log(req.body)
    User.create(req.body)
})



mongoose.connect("mongodb://localhost/userExample", {useNewUrlParser: true})

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully!");
});

const User = require('./models/userModel')


app.listen(3000, ()=>{
    console.log('server running')
})