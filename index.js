'use struct'
const http = require("./http.js");
const express = require('express');
var app = express();

var bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use("/adapter",function(req,res)
{
    http.adapter(req,res);
});

var port = process.env.port || 8080
app.listen(port)