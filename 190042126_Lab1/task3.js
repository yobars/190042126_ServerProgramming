var http = require('http');
var fs = require('fs');

const port = 8000;

var server = http.createServer((req, res) => {
    if(req.method === "GET") {
        res.writeHead(200, { "Content-Type": 'text/html'});
        fs.createReadStream(__dirname + '/public/index.html').pipe(res);
        console.log("The method is: " + req.method);
    } else if(req.method === "POST") {
        var body = "";
        req.on("data", chunk => {
            body +=chunk;
            console.log("The method is: " + req.method);
        });
    console.log("The url is" + req.url);
    console.log("The body is: " + req.body);

        req.on("end", function() {
            res.writeHead(200, { "Content-Type": 'text/html'});
            res.end(body);
        });
    }
});

server.listen(port, function(error) {
    if(error) {
        console.log('Something went wrong');
    } else {
        console.log('Server is listening on port ' + port);
    }
});