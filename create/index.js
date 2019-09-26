const path = require("path");
const mkdirp = require("mkdirp");
const fs = require("fs");

module.exports = function (name) {
	const projectDir = path.join(process.cwd(),name);
	mkdirp(projectDir,function (err) {
		if (err) {
			console.error("created failed")
		} else {
			console.log(`created ${name} folder successful`);
			const {template, dir, name:filenName} = require("../generator/index-html")(name);
			fs.writeFile(path.join(projectDir,dir,filenName),template.trim(),function (err) {
				if (err) {
					console.log(`created ${filenName} file failed`)
				} else {
					console.log(`created ${filenName} file successful`)
				}
			})
		}
	});
}