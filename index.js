var express = require('express');
var app = express();

app.all('*', function (req, res) {
  console.log(JSON.stringify({response: true, headers: req.headers}, null, 4));
  res.send({response: true, headers: req.headers});
});

app.listen(4545);
