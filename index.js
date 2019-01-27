//加载http模块
let http = require("http");

//虚拟SQL读取出来的数据
let items = [];

//创建http服务
http.createServer((req, res) => {
    //设置跨域的域名， * 代表允许任意域名跨域
    res.setHeader("Access-Control-Allow-Origin","*");

    //设置header类型
    res.setHeader("Access-Control-Allow-Headers","Content-Type");

    //跨域允许的请求方式
    res.setHeader("Content-Type","application/json");

    //判断请求
    switch(req.method){
        //post请求时，浏览器会先发一次options请求，如果请求通过，则继续发送正式的POST请求
        case "OPTIONS":
            res.statusCode = 200;
            res.end();
            break;

        //如果是get请求，则直接返回items数组
        case "GET":
            let data = JSON.stringify(items);
            res.write(data);
            res.end();
            break;
        
        //如果是post的请求
        case "POST":
            let item = '';
            //读取每次发送的数据
            req.on("data", function(chunk){
                item += chunk;
            });

            //数据发送完成
            req.on("end",function(){
                //存入
                item = JSON.parse(item);

                items.push(item.item);

                //将数据返回给客户端
                let data = JSON.stringify(items);
                res.write(data);
                res.end();
            });

            break;
    }

}).listen(3000);

console.log("http server is start...");