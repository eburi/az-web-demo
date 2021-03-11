const express = require('express')
const app = express()
const port = process.env.port || 8080;

app.get('/', (req, res) => {
  res.status(200).json(process.env);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

