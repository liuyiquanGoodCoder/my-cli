const path = require("path");
const mkdirp = require("mkdirp");
const fs = require("fs");

module.exports = function (name) {
	mkdirp(path.join(process.cwd(),name),function (err) {
		if (err) {
			console.error("created fail")
		} else {
			console.log(`created ${name} folder successful`);
			const {tempalte, dir, name:filenName} = require("../generator/package")(name);
		}
	});
}