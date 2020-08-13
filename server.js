var http = require('http');
var express = require('express');


var server=express();
server.listen(8888);
console.log('Server is running on port 8888');


server.use(express.static(__dirname));

server.set('view engine','twig');
server.set('views', '.');

let obj = {
    control: false,
    content:['Квак', 'Бяк', 'Шмяк']
};

server.get('/', function(req, res){
    res.render(__dirname+"/templ.twig",obj);
});
