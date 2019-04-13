//Install upper case package: npm install upper-case
// It downloads the upper-case package in node modules

var http = require('http'); //http module
var uc = require('upper-case'); // upper-case package

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(uc("Hello World!"));
  res.end();
}).listen(8080);



