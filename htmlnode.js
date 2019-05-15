/*
**
** The author disclaims copyright to this source code.
**
*/

var HTMLAttribute = require('./htmlattribute');
var HTMLStyle = require('./htmlstyle');

function HTMLNode(options){
	var _N = this;
	
	_N.options = null;
	_N.children = [];
	_N.attributes = [];
	
	_N.nodeName = "";
	_N.nodeText = "";
	_N.nodeStyle = new HTMLStyle(); //inline style
	
	_N.debug = false;
	
	if(typeof options != 'undefined'){
		_N.options = options;
		
		if(typeof options.name != 'undefined'){
			_N.nodeName = options.name;
		}
		if(typeof options.text != 'undefined'){
			_N.nodeText = options.text;
		}
		if(typeof options.debug != 'undefined'){
			_N.debug = options.debug;
		}
	}
	
	if(_N.options == null && _D.debug){
		console.log("[debug] No Node Options Specified");
	}
	
	_N.setName = function(name){
		_N.nodeName = name;
	}
	
	_N.setText = function(txt){
		_N.nodeText = txt;
	}
	
	_N.addChild = function(name){
		var count = _N.children.length;
		var n = new HTMLNode({'name':name,'debug':_N.debug});
		
		_N.children.push(n);
		
		return _N.children[count];
		
	}
	
	_N.addAttribute = function(name,value){
		var count = _N.attributes.length;
		var n = new HTMLAttribute({'name':name,'value':value});
		
		_N.attributes.push(n);
		
		return _N.attributes[count];
		
	}
	
	_N.toString = function(){
		var out = "<" + _N.nodeName;

		var acount = _N.attributes.length;
		if(acount > 0){
			for(var i=0; i<acount; i++){
				out += " " + _N.attributes[i].toString();
			}
		}
		//check for style
		var style = _N.nodeStyle.toString(true);
		if(style.length > 0){
			out += ' style="' + style + '"';
		}
		out += ">";
		out += _N.nodeText;
		
		var ccount = _N.children.length;
		//get all children strings
		for(var i=0; i<ccount; i++){
			out += _N.children[i].toString();
		}
		out += "</" + _N.nodeName + ">";
		return out;
	}
	
}

module.exports = HTMLNode;