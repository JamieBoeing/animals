const express = require('express')
const app = express()
const PORT = 3000


let animals = []

app.use(express.json())


app.listen(PORT, () => {
    console.log(`Whatchout the wire is live on port ${PORT}`)
}) 
   
