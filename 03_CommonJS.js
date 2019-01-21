var http = require("http");

var tools = require("./03_tool-add.js");

http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type":"text/html;charset=UTF-8"
    });

    res.write('<h2 style="text-align:center;">Hello , Node.js </h2>');

    console.log(tools.add(1,2,3,4,5));

    res.end();

}).listen(3000);