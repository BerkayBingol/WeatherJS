var http = require('http');

var init =  function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(
        '<!DOCTYPE html>'+
        '<html>'+
        ' <head>'+
        ' <meta charset="utf-8" />'+
        ' <title>My Node.js page!</title>'+
        ' </head>'+
        ' <body>'+
        ' <p>Here is a paragraph of <strong>HTML</strong>!</p>'+
        ' </body>'+
        '</html>');
    response.end();

}

var server = http.createServer(init);
server.listen(8080);
