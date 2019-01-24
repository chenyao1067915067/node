console.log("1");


let fs = require("fs");

getExt = () => {
    fs.readFile('08_ext.json',(err, data) => {
        console.log("2");
    })  
}

getExt();



//解决node的非阻塞I/O事件驱动
getExt = (caleback) => {
    fs.readFile('08_ext.json',(err, data) => {
        caleback(data);
    })
}

getExt((result) => {
    console.log(result.toString());
})

//通过node的events模块来解决
let events = require('events');

//实例化事件
let EventEmitter = new events.EventEmitter();

getExt = () => {
    fs.readFile('08_ext.json',(err, data) => {
        //将data广播出去
        EventEmitter.emit('data',data.toString());
    })
};

getExt();

//监听data
EventEmitter.on('data',(ext) => {
    console.log(ext);
})


console.log('3');