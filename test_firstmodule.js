var http = require('http');
var x = require('./module/myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(" <b>This is returned from new module: </b> " + x.test());
  res.end();
}).listen(8080);

