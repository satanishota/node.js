const express = require('express')
const app = express()
const port = 3000
const morgan = require("morgan")

const myLogger = (req, res, next )=> {
  console.log("LOGGED")
  // console.log(morgan)
  next();
}

const interests = [
  {
    name: "programing",
    emoji:"<_>",
    score: "80",
  },
  {
    name:"momo",
    smoji:"nasi",
  },
];

app.use(morgan())

app.get('/', (req, res) => {
  res.json(interests);
  // res.send(JSON.stringify(interests))
  // res.send('Hello World!')
})
app.get('/hoge',myLogger, (req, res) => {
  res.send('Hello hoge')
})
app.use(express.static('public'));
app.listen(port, () => {
  console.log(port)
})