
# example.js

``` javascript
console.log(require("./cup1"));
```

# cup1.coffee

``` coffee-script
module.exports =
	cool: "stuff"
	answer: 42
	external: require "./cup2.coffee"
	again: require "./cup2"
```

# cup2.coffee

``` coffee-script
console.log "yeah coffee-script"

module.exports = 42
```

# js/output.js

``` javascript
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// The bundle contains no chunks. A empty chunk loading function.
/******/ 	require.e = function requireEnsure(_, callback) {
/******/ 		callback.call(null, require);
/******/ 	};
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	require.modules = modules;
/******/ 	
/******/ 	// expose the module cache
/******/ 	require.cache = installedModules;
/******/ 	
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

	console.log(require(/*! ./cup1 */ 2));

/***/ },

/***/ 1:
/*!*********************!*\
  !*** ./cup2.coffee ***!
  \*********************/
/***/ function(module, exports, require) {

	console.log("yeah coffee-script");
	
	module.exports = 42;
	

/***/ },

/***/ 2:
/*!*********************!*\
  !*** ./cup1.coffee ***!
  \*********************/
/***/ function(module, exports, require) {

	module.exports = {
	  cool: "stuff",
	  answer: 42,
	  external: require(/*! ./cup2.coffee */ 1),
	  again: require(/*! ./cup2 */ 1)
	};
	

/***/ }
/******/ })
```

# Info

## Uncompressed

```
Hash: 4f1f8d98b70c16b33ab9ec23ffc93899
Version: webpack 0.10.0-beta6
Time: 152ms
    Asset  Size  Chunks             Chunk Names
output.js  2213       0  [emitted]  main       
chunk    {0} output.js (main) 206 [rendered]
    [0] ./example.js 31 [built] {0}
    [1] ./cup2.coffee 57 [built] {0}
        cjs require ./cup2 [2] ./cup1.coffee 5:9-26
        cjs require ./cup2.coffee [2] ./cup1.coffee 4:12-36
    [2] ./cup1.coffee 118 [built] {0}
        cjs require ./cup1 [0] ./example.js 1:12-29
```

## Minimized (uglify-js, no zip)

```
Hash: 4f1f8d98b70c16b33ab9ec23ffc93899
Version: webpack 0.10.0-beta6
Time: 194ms
    Asset  Size  Chunks             Chunk Names
output.js   418       0  [emitted]  main       
chunk    {0} output.js (main) 206 [rendered]
    [0] ./example.js 31 [built] {0}
    [1] ./cup2.coffee 57 [built] {0}
        cjs require ./cup2 [2] ./cup1.coffee 5:9-26
        cjs require ./cup2.coffee [2] ./cup1.coffee 4:12-36
    [2] ./cup1.coffee 118 [built] {0}
        cjs require ./cup1 [0] ./example.js 1:12-29
```