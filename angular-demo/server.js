var http = require('http');
var url = require('url');
var fs = require('fs');
var path = require('path');
var mime = require('./mime');

//路径
var DIR = './src';   //用于存放html的目录
var PORT = 8083;         //端口
var mainpath = path.join(DIR, "index.html");

//读取主页面
var indexPage = fs.readFileSync(mainpath);

http.createServer(function(request, response) {
    //解析请求，包括文件名
    var subpath = DIR;
    subpath += url.parse(request.url).pathname;
    if (subpath == DIR + "/" || subpath == mainpath) {
        subpath = path.join(DIR, "index.html");
    }

    //解析请求文件类型
    var type = subpath.substr(subpath.lastIndexOf('.') + 1, subpath.length - subpath.lastIndexOf('.') - 1);
    var encode = 'utf-8';
    //如果是图片需要使用二进制读取
    if (type == 'png' || type == 'woff' || type == 'woff2') {
        encode = 'binary';
    }

    type = mime.lookup(subpath);
    if (!type) {
        type = 'application/octet-stream';
    }

    fs.readFile(subpath, encode, function(error, data) {
        if (error) {
            console.log(error);
            response.writeHead(404, {
                'Content-Type': type
            });
        } else {
            response.writeHead(200, {
                'Content-Type': type
            });

            response.write(data, encode);
        }

        response.end();
    });

}).listen(PORT);
console.log('http://127.0.0.1:8083');