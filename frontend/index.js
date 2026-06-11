const http = require('http');
http.createServer((req, res) => {
  res.end('Frontend works!');
}).listen(3000, () => console.log('Frontend on port 3000'));
