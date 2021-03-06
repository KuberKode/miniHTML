/*
**
** The author disclaims copyright to this source code.
**
*/

var HTMLNode = require('./htmlnode');

function HTMLDocument(options){
	
	var _S = this;
	
	_S.debug = false;
	
	_S.options = null;
	
	_S.rootElement = new HTMLNode({name:"html"});
	
	if(typeof options != 'undefined'){
		_S.options = options;
		if(typeof options.debug != 'undefined'){
			_S.debug = options.debug;
		}
	}
	
	if(_S.options == null && _S.debug){
		console.log("[debug] No HTMLDocument Options Specified");
	}
	
	_S.rootElement.debug = _S.debug;
	
	console.log("Debug = " + _S.rootElement.debug);
	
	_S.head = _S.rootElement.addChild("head");	
	_S.body = _S.rootElement.addChild("body");
	
	_S.toString = function(){
		var out = '<!DOCTYPE "html">';
		out += _S.rootElement.toString();
		
		if(_S.debug){
			console.log("[Debug] " + out);
		}
		return out;
	}
	
}

module.exports = HTMLDocument;