/* eslint-disable no-console */
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.all('*', (request, response) => {
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on port 1337')
})
