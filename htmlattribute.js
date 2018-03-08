/*
**
** The author disclaims copyright to this source code.
**
*/

function HTMLAttribute(options){
	var _N = this;
	
	_N.options = null;
	
	_N.attrName = "";
	_N.attrValue = "";
	
	if(typeof options != 'undefined'){
		_N.options = options;
		
		if(typeof options.name != 'undefined'){
			_N.attrName = options.name;
		}
		if(typeof options.value != 'undefined'){
			_N.attrValue = options.value;
		}
	}
	
	if(_N.options == null){
		console.log("No Attribute Options Specified");
	}
	
	_N.setName = function(name){
		_N.attrName = name;
	}
	
	_N.setValue = function(value){
		_N.attrValue = value;
	}
	
	_N.toString = function(){
		var out = _N.attrName;
		
		if(_N.attrValue.length > 0){
			out += '="' + _N.attrValue + '"';
		}
		
		return out;
	}
	
}

module.exports = HTMLAttribute;