const express = require('express')
const app = express()
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}));
app.get('/bmicalculator', function (req, res) {
  res.sendFile(__dirname+"/bmicalculator.html")
})
app.post('/bmicalculator',function(req, res) {
  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result = num1/(num2*num2) ;
  res.send("your BMI is"+ result)
})

app.listen(3007,function(){})
