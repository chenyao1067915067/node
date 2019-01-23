
//判断服务器有没有upload目录，没有就创建这个目录
let fs = require('fs');

//图片上传
fs.stat("upload",(err,stats) => {
    //判断有没有upload目录
    if(err){
        fs.mkdir("upload",(error) => {
            if(error){
                console.log(error);
            }
            else{
                console.log('创建upload目录成功!');
            }
        })
    }
    else{
        console.log(stats.isDirectory());
        console.log("有upload文件夹，可以上传文件");
    }
})

//读取目录全部文件
fs.readdir("node_modules", (err, files) => {
    if(err){
        console.log(err);
        return false;
    }
    else{
        //判断是目录还是文件
        console.log(files);

        let filesArr = [];

        (function getFile(i){
            //循环结束
            if(i == files.length){
                //打印出所有目录
                console.log("目录：");
                console.log(filesArr);
                return false;
            }

            //判断是文件还是文件夹
            fs.stat('node_modules/'+files[i],(error, stats) => {
                if(stats.isDirectory()){
                   filesArr.push(files[i]);
                }
                
                //递归调用
                getFile(i+1);
            })
        })(0)
    }
})