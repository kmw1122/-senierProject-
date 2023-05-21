const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
const mysql = require('mysql')
const db = mysql.createPool({
  host: '%',
  user: 'userList',
  password: 'kmw1122!',
  database: 'userList',
})

app.get('/', (req, res) => {
  res.send('연결 되었습니다.')
})

app.get('/api/userList', (req, res) => {
  db.query('SELECT * FROM userList', (err, data) => {
    if (err) {
      console.log('err')
      res.send(err)
    } else {
      console.log('success')
      res.send(data)
    }
  })
})

app.listen(port, () => {
  console.log(`Connect at http://localhost:${port}`)
})
