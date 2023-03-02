const http = require('http');

http.createServer((req, res)=>{
    res.write('welcome to server');
    res.end();
}).listen(8585);