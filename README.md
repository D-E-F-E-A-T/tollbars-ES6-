# toolbars- Object
# Description
Toolbars objects
# Usage
1. copy respository
2. respository include style.css toolbars.js and object toobar in index.html with ancher's to click

```javascript
const myBar = new MWPjs({
	message: 'msg here - Beautiful and simple website widgets',
	close: function(){ alert('closed') },
	clickOk: function(){ alert('click ok') },
	position: 'top'
});
```
