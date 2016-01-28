/// <reference path="_reference.ts"/>
var http = require('http');
var port = process.env.port || 3000;
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Hello Node!");
});
server.listen(port, function () {
    console.log("Server started Listening port:" + port);
});
//# sourceMappingURL=Server.js.map