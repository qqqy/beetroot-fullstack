const express = require('express')
const massive = require('massive')
const bodyParser = require('body-parser')
require('dotenv').config()
const app = express()
const {SERVER_PORT , CONNECTION_STRING} = process.env

app.use(bodyParser.json())

app.get('/api/getstuff' , (req,res) => {
  const db = req.app.get('db')
  db.getstuff
})

// massive(CONNECTION_STRING).then(() => app.listen(SERVER_PORT, () => console.log(`Microwave is bugged on ${SERVER_PORT}`)))

// massive(CONNECTION_STRING).then(connection => {
//   app.set('db' , connection)
//   app.listen(SERVER_PORT, () => console.log(`He knows if you've been bad or good on ` + SERVER_PORT))
// })

massive(CONNECTION_STRING).then(connection => {
  app.set('db' , connection)
  app.listen(SERVER_PORT, () => console.log(`Come for spanky time at ${SERVER_PORT}`))
})