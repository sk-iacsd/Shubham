var http=require('http');
http.createServer(function(req,resp){
res.writeHead(200,{'Content-Type':'text/plain'});
res.end("Hello Worlddddddd");}).listen(8080);
console.log("on port 8080");