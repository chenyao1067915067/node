//引入http模块
let http = require("http");

//引入fs模块
let fs = require("fs");

//引入url模块
let url = require("url");

//引入path模块
let path = require("path");

http.createServer((req, res) => {
    //获取响应路径
    let pathName = url.parse(req.url).pathname;

    //默认加载路径
    if(pathName == "/"){
        pathName = "index.html";
    }

    //获取文件的后缀名
    let extName = path.extname(pathName);

    //过滤/favicon.ico的请求
    if(pathName != "/favicon.ico"){
        //获取08——WebService下的index.html
        fs.readFile("./08_WebService/"+pathName,(err, data) => {
            //如果不存在文件
            if(err){
                console.log("404 not Found");

                fs.readFile("./08_WebService/404.html",(errorNotFound, dataNotFound) => {
                    if(errorNotFound){
                        console.log(errorNotFound);
                    }
                    else{
                        res.writeHead(200,{
                            "Content-Type":"text/html;charset='utf-8'"
                        });

                        //读取写入文件
                        res.write(dataNotFound);
                        
                        //结束响应
                        res.end();
                    }
                })

                return;
            }
            else{
                //获取文件
                let ext = getExt(extName);
                console.log(ext);

                //设置请求头
                res.writeHead(200,{"Content-Type":ext+";charset='utf-8'"});

                //读取写入文件
                res.write(data);

                //结束响应
                res.end();
            }
        })
    }
}).listen(8080);

//获取后缀名
getExt = (extName) => {
    //readFile是异步操作，所以需要使用readFileSync
    // let data = fs.readFileSync('./08_ext.json');

    // let ext = JSON.parse(data.toString());

    // return ext[extName];
    switch(extName){
        case '.html':return 'text/html';
        case '.css':return 'text/css';
        case '.js':return 'text/js';
        default:return 'text/html';
    }
}