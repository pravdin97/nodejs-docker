const express = require('express');
const path = require('path');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'htmls', 'index.html'));
});

app.listen(PORT, HOST);
console.log(`running on http://${HOST}:${PORT}`);
