var http = require('http');
http.createServer(function (request, result) {
    result.writeHead(200, {'content-type': 'text/plain'});
    result.end('hello World');
}).listen(8080);
