const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')


const Animal = require('./models/animals')

app.use(express.json())
app.set('view engine', 'jsx')
app.engine('jsx', jsxEngine())

app.get('/items:')


app.listen(PORT, () => {
    console.log(`Whatchout the wire is live on port ${PORT}`)
}) 
   
