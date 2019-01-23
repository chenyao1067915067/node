
//新建fs
const fs = require("fs");

//以流的方式读取文件
let fileReadStream = fs.createReadStream('index.js');

//读取次数
let count = 0;

//保存数据
let str = '';

//开始读取
fileReadStream.on('data', (chunk) => {
    console.log(`${++count} 接收到：${chunk.length}`);
    str += chunk;
})

//读取完成
fileReadStream.on('end', () => {
    console.log('结束');
    console.log(str);
    console.log(count);
})

//读取失败
fileReadStream.on('error', (error) => {
    console.log(error);
})



let data = "hello world , 我要写入数据了！";

//创建一个可以写入的流，写入到文件index，js中
let writeStream = fs.createWriteStream('index.js');

//开始写入
writeStream.write(data,'utf8');

//写入完成
writeStream.end();

writeStream.on('finish', () => {
    console.log('写入完成！');
})