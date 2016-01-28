/// <reference path="_reference.ts"/>
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.port || 3000;
//main route
app.get('/', function (req, res, next) {
    res.sendFile(path.join(_dirname, "Public", "index.html"));
});
//route for info
app.get('/', function (req, res) {
    res.sendFile(path.join(_dirname, "Public", "info.html"));
});
app.listen(port, function () {
    console.log("App Started.............." + port);
});
//# sourceMappingURL=Server.js.map