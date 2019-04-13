var http = require('http'); // http module
var url = require('url');  // url module

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var query = url.parse(req.url, true).query; // json object {name:'guhan', age:29}
  var txt = query.name + " " + query.age;
  res.end(txt);
}).listen(8080);


//Check: http://localhost:8080/?name=guhan&age=29

