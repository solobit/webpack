# example.js

``` javascript
require("bundle!./file.js")(function(fileJsExports) {
	console.log(fileJsExports);
});
```

# file.js

``` javascript
module.exports = "It works";
```


# js/output.js

``` javascript
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/ 	
/******/ 	// object to store loaded and loading chunks
/******/ 	// "0" means "already loaded"
/******/ 	// Array means "loading", array contains callbacks
/******/ 	var installedChunks = {0:0};
/******/ 	
/******/ 	// The require function
/******/ 	function require(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/ 		
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/ 		
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(null, module, module.exports, require);
/******/ 		
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 		
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	require.e = function requireEnsure(chunkId, callback) {
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return callback.call(null, require);
/******/ 		
/******/ 		// an array means "currently loading".
/******/ 		if(installedChunks[chunkId] !== undefined) {
/******/ 			installedChunks[chunkId].push(callback);
/******/ 		} else {
/******/ 			// start chunk loading
/******/ 			installedChunks[chunkId] = [callback];
/******/ 			var head = document.getElementsByTagName('head')[0];
/******/ 			var script = document.createElement('script');
/******/ 			script.type = 'text/javascript';
/******/ 			script.charset = 'utf-8';
/******/ 			script.src = modules.c + "" + chunkId + ".output.js";
/******/ 			head.appendChild(script);
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	require.modules = modules;
/******/ 	
/******/ 	// expose the module cache
/******/ 	require.cache = installedModules;
/******/ 	
/******/ 	// install a JSONP callback for chunk loading
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, callbacks = [];
/******/ 		while(chunkIds.length) {
/******/ 			chunkId = chunkIds.shift();
/******/ 			if(installedChunks[chunkId])
/******/ 				callbacks.push.apply(callbacks, installedChunks[chunkId]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules)
/******/ 			modules[moduleId] = moreModules[moduleId];
/******/ 		while(callbacks.length)
/******/ 			callbacks.shift().call(null, require);
/******/ 	};
/******/ 	
/******/ 	// Load entry module and return exports
/******/ 	return require(0);
/******/ })
/************************************************************************/
/******/ ({
/******/ // __webpack_public_path__
/******/ c: "",

/***/ 0:
/*!********************!*\
  !*** ./example.js ***!
  \********************/
/***/ function(module, exports, require) {

	require(/*! bundle!./file.js */ 1)(function(fileJsExports) {
		console.log(fileJsExports);
	});

/***/ },

/***/ 1:
/*!***********************************************************************************************************!*\
  !*** (webpack)/~/bundle-loader!./file.js ***!
  \***********************************************************************************************************/
/***/ function(module, exports, require) {

	var cbs = [], 
		data;
	module.exports = function(cb) {
		if(cbs) cbs.push(cb);
		else cb(data);
	}
	require.e/*nsure*/(1, function(require) {
		data = require(/*! !./file.js */ 2);
		var callbacks = cbs;
		cbs = null;
		for(var i = 0, l = callbacks.length; i < l; i++) {
			callbacks[i](data);
		}
	});

/***/ }
/******/ })
```

# js/1.output.js

``` javascript
webpackJsonp([1],
{

/***/ 2:
/*!*****************!*\
  !*** ./file.js ***!
  \*****************/
/***/ function(module, exports, require) {

	module.exports = "It works";

/***/ }

}
)
```

# Info

## Uncompressed

```
Hash: a736de619594f70cfa552d06f59af048
Version: webpack 0.10.0-beta6
Time: 54ms
      Asset  Size  Chunks             Chunk Names
  output.js  4203       0  [emitted]  main       
1.output.js   185       1  [emitted]             
chunk    {0} output.js (main) 508 [rendered]
    [0] ./example.js 86 [built] {0}
    [1] (webpack)/~/bundle-loader!./file.js 422 [built] {0}
        cjs require bundle!./file.js [0] ./example.js 1:0-27
chunk    {1} 1.output.js 28 {0} [rendered]
    [2] ./file.js 28 [built] {1}
        cjs require !!.\file.js [1] (webpack)/~/bundle-loader!./file.js 8:8-171
```

## Minimized (uglify-js, no zip)

```
Hash: a736de619594f70cfa552d06f59af048
Version: webpack 0.10.0-beta6
Time: 140ms
      Asset  Size  Chunks             Chunk Names
  output.js   853       0  [emitted]  main       
1.output.js    56       1  [emitted]             
chunk    {0} output.js (main) 508 [rendered]
    [0] ./example.js 86 [built] {0}
    [1] (webpack)/~/bundle-loader!./file.js 422 [built] {0}
        cjs require bundle!./file.js [0] ./example.js 1:0-27
chunk    {1} 1.output.js 28 {0} [rendered]
    [2] ./file.js 28 [built] {1}
        cjs require !!.\file.js [1] (webpack)/~/bundle-loader!./file.js 8:8-171
```
