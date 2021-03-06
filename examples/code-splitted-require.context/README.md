# example.js

``` javascript
function getTemplate(templateName, callback) {
	require.ensure([], function(require) {
		callback(require("../require.context/templates/"+templateName)());
	});
}
getTemplate("a", function(a) {
	console.log(a);
});
getTemplate("b", function(b) {
	console.log(b);
});
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

	function getTemplate(templateName, callback) {
		require.e/*nsure*/(1, function(require) {
			callback(require(/*! ../require.context/templates */ 1)("./"+templateName)());
		});
	}
	getTemplate("a", function(a) {
		console.log(a);
	});
	getTemplate("b", function(b) {
		console.log(b);
	});

/***/ }
/******/ })
```

# js/1.output.js

``` javascript
webpackJsonp([1],
{

/***/ 1:
/*!*********************************************!*\
  !*** ../require.context/templates ^\.\/.*$ ***!
  \*********************************************/
/***/ function(module, exports, require) {

	var map = {
		"./a": 2,
		"./a.js": 2,
		"./b": 3,
		"./b.js": 3,
		"./c": 4,
		"./c.js": 4
	};
	function webpackContext(req) {
		return require(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	

/***/ },

/***/ 2:
/*!*****************************************!*\
  !*** ../require.context/templates/a.js ***!
  \*****************************************/
/***/ function(module, exports, require) {

	module.exports = function() {
		return "This text was generated by template A";
	}

/***/ },

/***/ 3:
/*!*****************************************!*\
  !*** ../require.context/templates/b.js ***!
  \*****************************************/
/***/ function(module, exports, require) {

	module.exports = function() {
		return "This text was generated by template B";
	}

/***/ },

/***/ 4:
/*!*****************************************!*\
  !*** ../require.context/templates/c.js ***!
  \*****************************************/
/***/ function(module, exports, require) {

	module.exports = function() {
		return "This text was generated by template C";
	}

/***/ }

}
)
```

# Info

## Uncompressed

```
Hash: a8c274d2392544e4d7c3e569c7917cad
Version: webpack 0.10.0-beta6
Time: 46ms
      Asset  Size  Chunks             Chunk Names
  output.js  3692       0  [emitted]  main       
1.output.js  1590       1  [emitted]             
chunk    {0} output.js (main) 266 [rendered]
    [0] ./example.js 266 [built] {0}
chunk    {1} 1.output.js 457 {0} [rendered]
    [1] ../require.context/templates ^\.\/.*$ 217 [built] {1}
        cjs require context ../require.context/templates [0] ./example.js 3:11-64
    [2] ../require.context/templates/a.js 80 [built] {1}
        context element ./a [1] ../require.context/templates ^\.\/.*$
        context element ./a.js [1] ../require.context/templates ^\.\/.*$
    [3] ../require.context/templates/b.js 80 [built] {1}
        context element ./b [1] ../require.context/templates ^\.\/.*$
        context element ./b.js [1] ../require.context/templates ^\.\/.*$
    [4] ../require.context/templates/c.js 80 [built] {1}
        context element ./c [1] ../require.context/templates ^\.\/.*$
        context element ./c.js [1] ../require.context/templates ^\.\/.*$
```

## Minimized (uglify-js, no zip)

```
Hash: a8c274d2392544e4d7c3e569c7917cad
Version: webpack 0.10.0-beta6
Time: 130ms
      Asset  Size  Chunks             Chunk Names
  output.js   792       0  [emitted]  main       
1.output.js   531       1  [emitted]             
chunk    {0} output.js (main) 266 [rendered]
    [0] ./example.js 266 [built] {0}
chunk    {1} 1.output.js 457 {0} [rendered]
    [1] ../require.context/templates ^\.\/.*$ 217 [built] {1}
        cjs require context ../require.context/templates [0] ./example.js 3:11-64
    [2] ../require.context/templates/a.js 80 [built] {1}
        context element ./a [1] ../require.context/templates ^\.\/.*$
        context element ./a.js [1] ../require.context/templates ^\.\/.*$
    [3] ../require.context/templates/b.js 80 [built] {1}
        context element ./b [1] ../require.context/templates ^\.\/.*$
        context element ./b.js [1] ../require.context/templates ^\.\/.*$
    [4] ../require.context/templates/c.js 80 [built] {1}
        context element ./c [1] ../require.context/templates ^\.\/.*$
        context element ./c.js [1] ../require.context/templates ^\.\/.*$
```
