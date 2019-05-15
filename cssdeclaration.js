/*
**
** The author disclaims copyright to this source code.
**
*/

function CSSDeclaration(options){
	var _D = this;
	
	_D.options = null;
	
	_D.declName = "";
	_D.declValue = "";
	_D.declImportant = false;
	
	_D.debug = false;
	
	if(typeof options != 'undefined'){
		_D.options = options;
		
		if(typeof options.name != 'undefined'){
			_D.declName = options.name;
		}
		if(typeof options.value != 'undefined'){
			_D.declValue = options.value;
		}
		if(typeof options.important != 'undefined'){
			_D.declImportant = options.important;
		}
		if(typeof options.debug != 'undefined'){
			_D.debug = options.debug;
		}
	}
	
	if(_D.options == null && _D.debug){
		console.log("[debug] No CSS Declaration Options Specified");
	}
	
	_D.setName = function(name){
		_D.declName = name;
	}
	
	_D.setValue = function(value){
		_D.declValue = value;
	}
	
	_D.toString = function(){
		var out = _D.declName;
		
		if(_D.declValue.length > 0){
			out += ': ' + _D.declValue;
			if(_D.declImportant){
				out += ' !important'
			}
			out += ';';
		}
		
		return out;
	}
	
}

module.exports = CSSDeclaration;