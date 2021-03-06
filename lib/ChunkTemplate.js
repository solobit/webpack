/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var ConcatSource = require("webpack-core/lib/ConcatSource");
var Template = require("./Template");

function ChunkTemplate(outputOptions) {
	Template.call(this, outputOptions);
}

module.exports = ChunkTemplate;

ChunkTemplate.prototype = Object.create(Template.prototype);
ChunkTemplate.prototype.render = function(chunk, moduleTemplate, dependencyTemplates) {
	var source = new ConcatSource();
	source.add(this.asString(this.renderHeader(chunk)));
	chunk.modules.forEach(function(module, idx) {
		if(idx != 0) source.add(",\n");
		source.add("\n/***/ " + module.id + ":\n");
		source.add(moduleTemplate.render(module, dependencyTemplates));
	});
	source.add("\n\n");
	source.add(this.asString(this.renderFooter(chunk)));
	chunk.rendered = true;
	return source;
};

ChunkTemplate.prototype.renderHeader = function(chunk) {
	return ["{\n"];
};

ChunkTemplate.prototype.renderFooter = function(chunk) {
	return ["}"];
};

ChunkTemplate.prototype.updateHash = function(hash) {
	hash.update("template");
	hash.update("jsonp");
	hash.update("2");
	hash.update(this.outputOptions.jsonpFunction + "");
	hash.update(this.outputOptions.library + "");
};