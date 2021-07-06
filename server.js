const express = require('express')

const path = require('path')

const PORT = process.env.PORT || 80
const HOST = '0.0.0.0'

const app = express()
app.use(express.static(path.join(__dirname, 'build')))

app.get('/ping', (req, res) => {
  return res.send('pong')
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

console.log(`Running on http://${HOST}:${PORT}`)
app.listen(PORT)
