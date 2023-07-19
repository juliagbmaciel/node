const express = require('express') 
const app = express(); 

const mongoose = require('mongoose')
const connectionString = 'mongodb+srv://juliagabrielle863:juliagabrielle11@testee.uprelaw.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true})
const routes = require('./routes')
const path = require('path')


app.use(express.urlencoded({extended: true})) 


app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'view'))
app.set('view engine', 'ejs')
app.use(routes)


app.listen(3000, ()=>{
    console.log('acessar http://localhost:3000')
}) 


