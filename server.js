const http = require('http');
const fs = require('fs');
const { isUtf8 } = require('buffer');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method );

res.setHeader('content-type','text/html' );
res.write('<h1>Hello, Node!!!</h1>');
res.end();

// Create the file
fs.writeFile('welcome.txt', "hello node", (err,content) => {
    if (err) {
      console.error('Error creating the file:', err);
    } else {
      console.log(fs.readFileSync("welcome.txt","Utf8"));
    }
  });



});

server.listen(3000, 'localhost',() => {
    console.log('listening for requests on port 3000');
});





