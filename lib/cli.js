'use strict';

var fs = require('fs');
var path = require('path');
var info = require('./info');
var noptUsage = require('nopt-usage');
var CliParser = require(__dirname + '/cliParser');
var dataGenerator = require(__dirname + '/dataGenerator');
var SeedScriptBuilder = require(__dirname + '/seedScriptBuilder');

var cliParser = new CliParser(process.argv);
var usage = noptUsage(cliParser.known, cliParser.aliases, cliParser.descriptions);

var cli = module.exports = function () {
    if (cli.options['help'] === true) {
        info.help(usage);
        process.exit();
    }

    var scripts;
    if (fs.lstatSync(cli.options.schema).isDirectory()) {
        scripts = fs.readdirSync(cli.options.schema).map(function (script) {return cli.options.schema + '/' + script;});
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
        var scriptName = path.basename(script, '.js');
        data[scriptName] = dataGenerator(require(script), cli.options.number);
    });

    // for (var model in data) {
    //     var scriptBuilder = new SeedScriptBuilder(model);
    //     SeedScriptBuilder.writeSeedScript(cli.options.output);
    // }

    if(cli.options.fullOutput) {
        console.log(data);
    }
};
cli.options = cliParser.parsedOptions;