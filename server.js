var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer(function(req, res) {
    var filePath = '.' + req.url
    if (filePath == './') {
        filePath = './index.html';
    }
    var fileExtension = path.extname(filePath);
    var contentType;
    switch (fileExtension) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        default:
            contentType = 'text/html';
    }
    fs.exists(filePath, function(exists) {
        if (exists) {
            fs.readFile(filePath, 'utf-8', function(error, data) {
                if (error) {
                    res.writeHead(500, { 'Content-Type': 'text/html' });
                    res.write('Uh oh, error reading that file!');
                    res.end();
                    console.error('Uh oh, error reading that file!', error);
                    return;
                } else {
                    res.writeHead(200, { 'Content-Type': contentType });
                    console.log("Crikey, it works!" + contentType);
                    res.end(data);
                }
            });
        } else {
            res.writeHead(404);
            res.end();
        }
    });
});
server.listen(9000);
console.log("Server is listening, yeah!");