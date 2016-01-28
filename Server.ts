/// <reference path="_reference.ts"/>
import http = require('http');

 


const port:number = process.env.PORT || 8080;

var server:http.Server=http.createServer(
    function(req:http.ServerRequest,res:http.ServerResponse){
        res.writeHead(200,{'content-Type':'text/plain'});
        res.end("Hello Node!");
    }
);
server.listen(port,function()
{
    console.log("App Started.............."+port);
});

  