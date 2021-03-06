/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var ConcatSource = require("webpack-core/lib/ConcatSource");
var PrefixSource = require("webpack-core/lib/PrefixSource");

function FunctionModuleTemplate(outputOptions, requestShortener) {
	this.outputOptions = outputOptions || {};
	this.requestShortener = requestShortener;
}
module.exports = FunctionModuleTemplate;

FunctionModuleTemplate.prototype.render = function(module, dependencyTemplates) {
	var source = new ConcatSource();
	if(this.outputOptions.pathinfo) {
		var req = module.readableIdentifier(this.requestShortener);
		source.add("/*!****" + req.replace(/./g, "*") + "****!*\\\n");
		source.add("  !*** " + req.replace(/\*\//g, "*_/") + " ***!\n");
		source.add("  \\****" + req.replace(/./g, "*") + "****/\n");
	}
	source.add("/***/ function(module, exports, require) {\n\n");
	source.add(new PrefixSource("\t", module.source(dependencyTemplates, this.outputOptions, this.requestShortener)));
	source.add("\n\n/***/ }");
	return source;
};

FunctionModuleTemplate.prototype.updateHash = function(hash) {
	hash.update("1");
};