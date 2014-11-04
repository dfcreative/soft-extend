# Soft-extend

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

---

Unlicensed.