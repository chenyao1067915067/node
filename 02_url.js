//1.引入url模块
var url = require('url');

//2.引入http模块
var http = require("http");

//3.用http模块创建服务  req获取url信息 res浏览器返回信息
http.createServer(function (req,res){
    //4.获取服务器请求
    if(req.url != "/favicon.ico"){
        //5。使用url的parse方法
        var result = url.parse(req.url,true);
        console.log(result);

        console.log(result.query.userName);
        console.log(result.query.userAge);
    }
    
    //设置HTTP请求头，状态码是200，文件类型是html，字符集是UTF8
    res.writeHead(200,{
        "Content-Type":"text/html;charset=UTF-8"
    });

    //往页面打印数据
    res.write('<h1 style="text-align:center;">Hello , Node.js </h1>');

    //结束响应
    res.end();
}).listen(3000);
