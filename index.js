const path = require('path');
const express = require('express');
const { check, validationResult }= require('express-validator/check');

const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());

// serving static assets
app.use(express.static(path.join(__dirname, "public")));

app.post('/cal', function (req, res) {

  console.log(req.body);

  var x = JSON.parse(req.body.value);
  var y = JSON.parse(req.body.value1);
  var sign = req.body.operator;

  function plus(a, b) {
    return (a + b);
  }

  function minus(a, b) {
    return (a - b);
  }

  function multiply(a, b) {
    return (a * b);
  }

  function divide(a, b) {
    return (a / b);
  }

  function modulo(a, b) {
    return (a % b);
  }

  switch (sign) {
    case '+':
      var result = plus(x, y);

      break;
    case '-':
      var result = minus(x, y);

      break;
    case '*':
      var result = multiply(x, y);

      break;
    case '/':
      var result = divide(x, y);

      break;
    case '%':
      var result = divide(x, y);

      break;
  }


  console.log(result)
  res.status(200).json({
    'result': result
  });

});

app.listen(3000, function () {
  console.log('App is running on port 3000');
})