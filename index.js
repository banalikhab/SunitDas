const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello mckv. Banalikha!')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
