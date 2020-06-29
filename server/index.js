const express = require("express");
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, "../", 'docs', '.vuepress', 'dist')));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, "../", 'docs', '.vuepress', 'dist', 'index.html'));
});
app.listen(3003, () => console.log(`http://localhost:3003/`))