const express = require('express')
const app = express()
const port = 100

app.get('/', function (req, res) {
  res.send('Cara pakai = localhost:100/operator/angka pertama/angka kedua')
 console.log('jenis operator')

})

app.get('/tambah/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var sum = (num1 + num2).toString()
  res.send(sum)
})

app.get('/kurang/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var difference = (num1 - num2).toString()
  res.send(difference)
})

app.get('/kali/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  var product = (num1 * num2).toString()
  res.send(product)
})

app.get('/bagi/:num1/:num2', function (req, res) {
  var num1 = parseInt(req.params.num1)
  var num2 = parseInt(req.params.num2)
  if (num2 != 0){
    var quotient = (num1 / num2).toString()
    res.send(quotient)
  }
  else{
    res.send('Error bang')
  }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
