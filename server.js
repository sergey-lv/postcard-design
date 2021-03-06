const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, "dist", "angular-practice")));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'angular-practice', 'index.html' ));
});

app.listen(process.env.PORT || 8080);