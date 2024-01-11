const http = require('http');

const server = http.createServer((req, res) => {
    
    res.setHeader('Content-Type', 'text/html');

    
    res.end('<h1>Hello Node!!!!</h1>');
});


server.listen(process.env.PORT || 3000, () => {
    console.log('Node.js web server is running..');
});
