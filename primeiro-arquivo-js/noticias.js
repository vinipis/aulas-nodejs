var http = require('http');

var server = http.createServer(function(req, res){

    res.end("<html><head><title>Teste de titulo</title></head><body>Portal de noticias</body></html>");

});

server.listen(3000);