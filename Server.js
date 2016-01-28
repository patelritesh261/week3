/// <reference path="_reference.ts"/>
var http = require('http');
var port = process.env.PORT || 8080;
var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-Type': 'text/plain' });
    res.end("Hello Node!");
});
server.listen(port, function () {
    console.log("App Started.............." + port);
});
//# sourceMappingURL=Server.js.map