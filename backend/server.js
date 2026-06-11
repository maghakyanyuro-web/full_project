const http = require('http');
http.createServer((req, res) => {
  res.end('Backend works!');
}).listen(5000, () => console.log('Backend on port 5000'));
