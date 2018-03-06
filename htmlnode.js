/*
**
** The author disclaims copyright to this source code.
**
*/

function HTMLNode(options){
	var _N = this;
	
	_N.options = null;
	_N.children = [];
	
	_N.nodeName = "";
	_N.nodeText = "";
	
	if(typeof options != 'undefined'){
		_N.options = options;
		
		if(typeof options.name != 'undefined'){
			_N.nodeName = options.name;
		}
		if(typeof options.text != 'undefined'){
			_N.nodeText = options.text;
		}
	}
	
	if(_N.options == null){
		console.log("No Node Options Specified");
	}
	
	_N.setName = function(name){
		_N.nodeName = name;
	}
	
	_N.setText = function(txt){
		_N.nodeText = txt;
	}
	
	_N.addChild = function(name){
		var count = _N.children.length;
		var n = new HTMLNode({'name':name});
		
		_N.children.push(n);
		
		return _N.children[count];
		
	}
	
	_N.toString = function(){
		var out = "<" + _N.nodeName + ">";
		out += _N.nodeText;
		
		var count = _N.children.length;
		//get all children strings
		for(var i=0; i<count; i++){
			out += _N.children[i].toString();
		}
		out += "</" + _N.nodeName + ">";
		
		return out;
	}
	
}

module.exports = HTMLNode;