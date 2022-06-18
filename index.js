const express = require('express')
const app = express()
const port = 3000

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

app.get('/', (req, res) => {
  res.json(interests);
  // res.send(JSON.stringify(interests))
  // res.send('Hello World!')
})
app.listen(port, () => {
  console.log(port)
})