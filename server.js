require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const PORT = process.env.PORT || 3000
const db = mongoose.connection

app.use(express.json())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('connected to mongodb')
})


app.get('/items:', async (req, res) => {
    res.json(items)
})

app.post('/items:', (req, res) => {
    const { name, price } = req.body
    if (!name || !price) {
        return res.status(400).json({ error: 'Name and price are required fields'})
    }
    const newItem = { id: itemId, name, price }
    items.push(newItem)
    itemId++

    res.status(201).json(newItem)
})

app.get('/items/id', (req, res) => {
    const { id } = req.params
const item = items.find((item) => item.id === parseInt(id))

if (!item) {
    return res.status(404).json({ error: 'Item not found.' })
}

res.json(item)
})

app.delete('/items/id', (req, res) => {
    const { id } = req.params;
    const index = items.findIndex((item) => item.id === parseInt(id))
    if (index === -1) {
        return res.status(404).json({ error: 'Item not found.' })
    }

    const deletedItem = items.splice(index, 1)[0]
    
    res.json(deletedItem)
})

app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint not found.' })
})

app.listen(PORT, () => {
    console.log(`Whatchout the wire is live on port ${PORT}`)
}) 
   
