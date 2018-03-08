/*
**
** The author disclaims copyright to this source code.
**
** Tested with nodejs v8.9.1, 8.9.4, 8.10.0
**
*/
const http = require('http');

var HTMLDocument = require('./htmldocument');

const server = http.createServer((request, response) => {
	
	var doc = new HTMLDocument();
	
	var title = doc.head.addChild("title");
	title.setText("Server");
	
	var h1 = doc.body.addChild("h1");
	h1.setText("Hello World");
	
	var p = doc.body.addChild("p");
	
	var a = p.addChild("a");
	
	a.addAttribute("href","http://localhost:80");
	a.setText("Click me!");
	
	response.writeHead(200, {"Content-Type": "text/html"});	
	response.write(doc.toString());
	response.end();

});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(80);
console.log("Server is listening");