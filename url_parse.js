var http = require('http'); // http module
var url = require('url');  // url module

http.createServer(function (req, res) {
  addr=req.url;
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  var q = url.parse(addr, true);
  console.log(q.host); 
  console.log(q.pathname); 
  console.log(q.search); 
  var qdata = q.query; 
  console.log(qdata.name); 
  console.log(qdata.age); 
  
  res.end("Host: "+q.host+"<br>Pathname:"+q.pathname+
          "<br>Search:"+q.search+"<br>Name:"+qdata.name+"<br>Age:"+qdata.age);
  
}).listen(8080);

//Check: http://localhost:8080/?name=guhan&age=29

