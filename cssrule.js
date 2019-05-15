/*
**
** The author disclaims copyright to this source code.
**
*/

var CSSDeclaration = require('./cssdeclaration');

function CSSRule(options){
	var _N = this;
	
	
	var RULETYPE = {
		AT: 0,
		QUALIFIED:	1
	};
	
	_N.options = null;
	
	_N.atName = ""; //at-rules only
	_N.atSelector = "";//at-rules only
	_N.atDeclarations = [];//at-rules only
	
	_N.selector = "";
	_N.declarations = [];
	
	_N.type = RULETYPE.QUALIFIED; //at-rule or qualified rule
	
	if(typeof options != 'undefined'){
		_N.options = options;
		
		if(typeof options.selector != 'undefined'){
			_N.selector = options.selector;
		}
	}
	
	if(_N.options == null){
		console.log("[debug] No CSS Rule Options Specified");
	}
	
	_N.setSelector = function(selector){
		_N.selector = selector;
	}
	
	_N.addDeclaration = function(name,value){
		var count = _N.declarations.length;
		var n = new CSSDeclaration({'name':name,'value':value});
		
		_N.declarations.push(n);
		
		return _N.declarations[count];
	}
	
	_N.toString = function(inline = false){
		//TODO: check type
		var out = "";
		if(!inline){
			out += _N.selector;
			out += '{';
			out += '\n';
		}
		if(_N.declarations.length > 0){
			for(i=0;i<_N.declarations.length;i++){
				var decl = _N.declarations[i];
				out += decl.toString();
				if(!inline){
					out += '\n';
				}
			}
		}

		if(!inline){
			out += '}';
			out += '\n';
		}
		
		return out;
	}
	
}

module.exports = CSSRule;