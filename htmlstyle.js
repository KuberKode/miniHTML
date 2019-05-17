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
	
	try{
		if(typeof options != 'undefined'){
			_S.options = options;
			//check for selectors and rules
			Object.keys(options).forEach(function(key) { //expected format // {"selector":{"rule1":"value1","rule2":"value2"}}
				  var selector = key;
				  
				  var nR = _S.addRule(selector);
				  
				  var rules = options[key];
				  console.log("[debug] selector:"+selector);
				  Object.keys(rules).forEach(function(r){
					 var ar = rules[r];
					 console.log("[debug] "+r+":"+ar);
					 nR.addDeclaration(r,ar);
				 });
			});
		}
	} catch (err){
		console.log("[error] " + err);
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