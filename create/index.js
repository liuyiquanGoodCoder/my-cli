const path = require("path");
const mkdirp = require("mkdirp");
const fs = require("fs");

module.exports = function (name) {
	mkdirp(path.join(process.cwd(),name),function (err) {
		if (err) {
			console.error("created failed")
		} else {
			console.log(`created ${name} folder successful`);
			const {tempalte, dir, name:filenName} = require("../generator/package")(name);
			fs.writeFile(path.join(projectDir,dir,filenName),tempalte.trim(),function (err) {
				if (err) {
					console.log(`created ${filenName} file failed`)
				} else {
					console.log(`created ${filenName} file successful`)
				}
			})
		}
	});
}