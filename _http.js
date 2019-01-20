var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"text/html;chartset=UTF-8"});

    res.write('Hello boy,Node.js ');

    res.end();
}).listen(3000);