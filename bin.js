#!/usr/bin/env node

const program = require("commander");
const version = require("./package.json").version;

program.version(version,"-v, --version");

program
	.command("create <app-name>")
	.description("use my-cli to create a project")
	.option("-d --dir <dir>","create path")
	.action((name)=>{
		const create = require("./create");
		create(name);
	});

program.parse(process.argv);