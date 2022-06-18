const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 8080;

// ? Create the server
const server = http.createServer( (req, res) => {

// URL/Page 
let requested_page;
if(req.url === '/'){
    requested_page = 'index.html';
    } else 
            if (req.url === '/about'){
                requested_page = 'about.html';
            }   else 
                        if(req.url === '/contact-me'){
                            requested_page = 'contact-me.html'
                        } else 
                                requested_page = '404.html';
 // Get file path
let filePath = path.join(
    __dirname,
    // here maybe 'public', 'src', 'styles'...
    requested_page
);

// Get the extension name of the file
let extName = path.extname(filePath);
let contentType = 'text/html';
// Get correct contect type
switch (extName) {
    case '.css':
        contentType = 'text/css';
        break;
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.json':
        contentType = 'application/json';
        break;
    case '.png':
        contentType = 'image/png';
        break;
    case '.jpg':
        contentType = 'image/jpg';
        break;
}

// Loging results
console.log(`File path: ${filePath}`);
console.log(`Content-Type: ${contentType}`)

// Write sucess request message
res.writeHead(200, {'Content-Type': contentType});

// Use fs.createReadStream() method to read the file
const readStream = fs.createReadStream(filePath);
// Use pipe to get file data and pipe it as response (f.e. the html, js or css to the broser of the user)
readStream.pipe(res);
// Or .on() to display file on console

});
  
server.listen(port, (err) => {

    if (err) {
        console.log(`Error: ${err}`)
    } else {
        console.log(`This Server works. Listening at port ${port}...`);
    };

});
