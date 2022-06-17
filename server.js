const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 8080;

const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader( 'Content-Type', 'text/html');
    res.end('This site has sucessfully been loaded.')
});
  
server.listen( (port) => {
    console.log('  It worked :-)  ');
});
