/*
**
** The author disclaims copyright to this source code.
**
** Tested with nodejs v12.18.3 LTS
**
*/
const http = require('http');

const HTMLDocument = require('./htmldocument');
const HTMLStyle = require('./htmlstyle');

let listenPort = 8080;
const nodeVersionTested = "v22.18.0 LTS";

const server = http.createServer((request, response) => {
	
	const doc = new HTMLDocument({'debug':false});
	
	const title = doc.head.addChild("title");
	title.setText("miniHTML Server");
	
	const style = doc.head.addChild("style");
	style.addAttribute("type","text/css");
	
	const bodyStyle = new HTMLStyle();
	const bodyRules = bodyStyle.addRule("body");

	bodyRules.addDeclaration("font-family","Arial");
	bodyRules.addDeclaration("padding","0");
	
	const aStyle = new HTMLStyle({"a":{
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
	
	const h1 = doc.body.addChild("h1");
	h1.setText("Hello World");
	const h1Rule = h1.nodeStyle.addRule("h1");
	h1Rule.addDeclaration("color","#FF0000");
	h1Rule.addDeclaration("size","200%");
	
	const h3 = doc.body.addChild("h3");		
	h3.setText("Server is listening at http://localhost:"+listenPort);
	
	const p1 = doc.body.addChild("p");	
	p1.setText("A mini HTML node and document class for nodejs with basic, qualified, CSS rules");

	const p2 = doc.body.addChild("p");
	p2.setText("This software is released into the public domain");

	const p3 = doc.body.addChild("p");
	p3.setText("Tested with nodejs "+nodeVersionTested);

	const p4 = doc.body.addChild("p");
	p4.setText("Disclaimer: Not to be associated with SublimeText minihtml");
	
	const p5 = doc.body.addChild("p");
	var a = p5.addChild("a");	
	a.addAttribute("href","https://github.com/KuberKode/miniHTML");
	a.addAttribute("target","_github");	
	a.setText("View on GitHub");
	
	response.writeHead(200, {"Content-Type": "text/html"});	
	response.write(doc.toString());
	response.end();

});

server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});

server.listen(listenPort);
console.log("Server is listening at http://localhost:"+listenPort);