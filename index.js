// index.js
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.json({ message: 'Hi, Flutter errors' })
})

app.post('/flutter-errors', (req, res) => {
  console.log('Error => ', req.body)
  res.json({ code: 200, message: 'Success' })
})

app.listen(3000)
