const {createServer} = require("http");
const {createReadStream} = require("fs");
const {decode} = require("querystring");

const port = 3000;
const host = 'localhost';
const sendFile = (res, status, type, filePath) => {
    res.writeHead(status, {"Content-Type": type});
    createReadStream(filePath).pipe(res);
};

createServer((req, res) => {

    if (req.method === "POST") {
        let body = "";
        req.on("data", data => {
            body += data;
        });
        req.on("end", () => {
           const {name, email, message } = decode(body);
           console.log(`${name} (${email}): ${message}`);
        });
    }

    switch (req.url) {
        case "/":
            return sendFile(res, 200, "text/html", "./index.html");
        case "/contact":
            return sendFile(res, 200, "text/html", "./contact.html");
        case "/img.jpg":
            return sendFile(res, 200, "image/jpg", "img.jpg");
        case "/style.css":
            return sendFile(res, 200, "text/css", "style.css");
        default:
            return sendFile(res,200, "text/html", "./404.html");
    }

}).listen(port, host, function() {
    console.log(`Listening at http://${ host }:${ port }`);
});