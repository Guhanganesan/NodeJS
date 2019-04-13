var http = require('http');// http module
var fs = require('fs'); // file server module
http.createServer(function (req, res) {
  fs.readFile('./Files/myfile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);


