'use strict';

var fs = require('fs');
var path = require('path');
var info = require('./info');
var CliParser = require(__dirname + '/cliParser');
var dataGenerator = require(__dirname + '/dataGenerator');
var SeedScriptBuilder = require(__dirname + '/seedScriptBuilder');

var cli = module.exports = function () {
    if (cli.options['help'] === true) {
        info.help();
        process.exit();
    }

    var scripts;
    if (fs.lstatSync(cli.options.schema).isDirectory()) {
        scripts = fs.readdirSync(cli.options.schema);
    } else {
        scripts = [cli.options.schema];
    }

    if (!fs.existsSync(cli.options.output)) {
        fs.mkdirSync(cli.options.output);
    }
    if (!fs.lstatSync(cli.options.output).isDirectory()) {
        console.log('Output must be a directory');
        process.exit(1);
    }

    var data = {};
    scripts.forEach(function (script) {
        console.log(script);
        var scriptName = path.basename(script, '.js');
        data[scriptName] = dataGenerator(require(script), cli.options.number, 'increment');
    });

    if(cli.options.fullOutput) {
        console.log(data);
    }
};
cli.options = (new CliParser(process.argv)).parse();