/*
**
** The author disclaims copyright to this source code.
**
*/

var CSSRule = require('./cssrule');

function HTMLStyle(options){ //HTML CSS STYLE
	var _S = this;
	
	_S.options = null;
	
	_S.rules = [];
	
	_S.addRule = function(selector){
		var count = _S.rules.length;
		var n = new CSSRule({'selector':selector});
		
		_S.rules.push(n);
		
		return _S.rules[count];
	}
	
	
	_S.toString = function(inline = false){
		var out = '';
		
		if(_S.rules.length > 0){
			for(i=0;i<_S.rules.length;i++){
				var rule = _S.rules[i];
				out += rule.toString(inline);
			}
		}
		
		return out;
	}
}

module.exports = HTMLStyle;