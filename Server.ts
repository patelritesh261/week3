/// <reference path="_reference.ts"/>
import express =require('express');
import path =require('path');
var app:express.Express=express();
var port:number=process.env.port || 3000;

//main route
app.get('/', function (req:express.Request,res:express.Response,next:any){
    res.sendFile(path.join(_dirname,"Public","index.html"));
    
});
//route for info
app.get('/', function (req:express.Request,res:express.Response){
    res.sendFile(path.join(_dirname,"Public","info.html"));
    
});
app.listen(port,function()
{
    console.log("App Started.............."+port);
});

