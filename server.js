/*
**
** The author disclaims copyright to this source code.
**
** Tested with nodejs v12.18.3 LTS
**
*/
const http = require('http');

var HTMLDocument = require('./htmldocument');
var HTMLStyle = require('./htmlstyle');

var listenPort = 8080;

const server = http.createServer((request, response) => {
	
	var doc = new HTMLDocument({'debug':false});
	
	var title = doc.head.addChild("title");
	title.setText("Server");
	
	var style = doc.head.addChild("style");
	style.addAttribute("type","text/css");
	
	var bodyStyle = new HTMLStyle();
	var bodyRules = bodyStyle.addRule("body");

	bodyRules.addDeclaration("font-family","Arial");
	bodyRules.addDeclaration("padding","0");
	
	var aStyle = new HTMLStyle({"a":{
		"display":"block",
		"border-radius":"6px",
		"color":"#FFFFFF",
		"background-color":"#000000",
		"text-decoration":"none",
		"padding":"6px",
		"width":"33%",
		"font-size":"130%",
		"font-weight":"bold",
		"text-align":"center"
		}});
	
	style.setText(bodyStyle.toString()+aStyle.toString());
	
	var h1 = doc.body.addChild("h1");
	h1.setText("Hello World");
	var h1Rule = h1.nodeStyle.addRule("h1");
	h1Rule.addDeclaration("color","#FF0000");
	h1Rule.addDeclaration("size","200%");
	
	var p = doc.body.addChild("p");
	
	var a = p.addChild("a");
	
	a.addAttribute("href","http://localhost:" + listenPort);
	a.setText("Click me!");
	
	response.writeHead(200, {"Content-Type": "text/html"});	
	response.write(doc.toString());
	response.end();

});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(listenPort);
console.log("Server is listening at http://localhost:"+listenPort);