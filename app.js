var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
    response.writeHead(200, {'content-Type': 'text/html'});
    fs.readFile('./public/html/index.html', null, function(error, data){
        if(error) {
            response.writeHead(404);
            response.write('file not found');
        } else {
            response.write(data);
        }
        response.end();
    });    
}

http.createServer(onRequest).listen(8000);