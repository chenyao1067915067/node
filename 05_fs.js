var fs = require('fs');

//检测是文件还是目录
fs.stat('index.js',(error, stats) => {
    if(error){
        console.log(error);
        return false;
    }
    else{
        console.log(stats);
        console.log(`文件：${stats.isFile()}`);

        console.log(`文件：${stats.isDirectory()}`);

        return false;
    }
})

//创建文件夹
fs.mkdir("css",(err) => {
    if(err){
        console.log(err);
        return false;
    }
    else{
        console.log('创建成功！');
    }
})

//删除文件夹
fs.rmdir("css",(err) => {
    if(err){    
        console.log(err);
        return false;
    }
    else{
        console.log('删除文件夹成功！');
    }
})

//向文件写入内容，写入之前会清空内容，没有文件就创建
fs.writeFile("index.js","hello,node.js",(err) => {
    if(err){
        console.log(err);
        return false;
    }
    else{
        console.log('写入成功！');
    }
})

//向文件追加内容
fs.appendFile("index.js","这是追加的内容",(err) => {
    if(err){
        console.log(err);
        return false;
    }
    else{
        console.log('追加内容成功');
    }
})

//读取文件
fs.readFile('index.js', (err, data) => {
    if(err) {
        console.log(err);
        return false;
    } else {
        console.log("读取文件成功！");
        console.log(data);
    }
})
  
//读取目录
fs.readdir("node_modules", (err, data) => {
    if(err){
        console.log(err);
        return false;
    }
    else{
        console.log('读取成功！');
        console.log(data);
    }
})

//重命名文件
fs.rename("index.js","cy.js", (err) => {
    if(err){
        console.log(err);
        return false;
    }
    else{
        console.log('重命名成功!');
    }
})

//剪切
fs.rename("cy.js","node_modules/cy.js", (err) => {
    if(err){
        console.log(err);
        return false;
    }
    else{
        console.log("剪切成功！");
    }
})