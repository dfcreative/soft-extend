# Soft-extend <a href="UNLICENSE"><img src="http://upload.wikimedia.org/wikipedia/commons/6/62/PD-icon.svg" width="20"/></a>

Extend any object softly, i. e. do not replace existing properties, just append the new ones.

```js
var sextend = require('soft-extend');

var defaults = {
	intensity: 100,
	hold: true
}

//the very common use-case
function MyClass(options){
	this.options = sextend(options || {}, defaults);
}
```


[![NPM](https://nodei.co/npm/soft-extend.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/soft-extend/)