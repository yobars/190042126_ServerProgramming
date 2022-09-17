var http = require('http'); //HTTP library
var fs = require('fs') // library for file handling

const port = 8000

var server = http.createServer((req,res) => {
    res.writeHead(200, { 'Content-Type': 'text/html'}); // 200 response status code - successful
    fs.readFile('task1.html', function(error, data) {
        if(error) {
            res.writeHead(404); //content not found
            res.write('Error: File not found');
        } else {
            res.write(data);
        }
        res.end()
    })
    // console.log(req.method + " " + req.url + " " + req.httpVersion);
    // res.end();
});

server.listen(port, function(error) {
    if(error) {
        console.log('Something went wrong');
    } else {
        console.log('Server is listening on port ' + port);
    }
})