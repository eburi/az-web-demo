const express = require('express')
const app = express()
const port = process.env.port || 8080;

app.get('/', (req, res) => {
  res.send('Liebe Mobiliar! Ich habe leider die ' + process.env.Environment + 's Environment kaputt gemacht.')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

