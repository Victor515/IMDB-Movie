var path = require('path');
var express = require('express');
var app = express();

const PORT = process.env.PORT || 8080

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, './source/html/index.html'));
});

app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`Listening on ${PORT}`);
});
