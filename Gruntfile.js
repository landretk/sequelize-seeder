module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-mocha-test');


    var taskConfig = {

            jshint: {
                src: [
                    'lib/**/*.js', 'bin/seederizer'
                ],
                test: [
                    'test/**/*.js'
                ],
                options: {
                    curly: true,
                    eqeqeq: true,
                    sub: true,
                    boss: true,
                    eqnull: true,
                    node: true,
                    expr: true,
                    asi: true,
                    esversion: 6
                },
                globals: {}
            },

            mochaTest: {
                specs: {
                    options: {
                        ui: 'bdd',
                        reporter: 'spec',
                        colors: 'true',
                        slow: 20,
                        require: [
                            './test/helpers/globals'
                        ]
                    },
                    src: ['test/**/*[Ss]pec.js']
                }
            },

            delta: {
                jssrc: {
                    files: [
                        'lib/**/*.js', 'bin/seederizer'
                    ],
                    tasks: ['jshint:src', 'mochaTest:specs']
                }
                ,
                jsunit: {
                    files: [
                        'test/**/*.js'
                    ],
                    tasks: ['jshint:test', 'mochaTest:specs']
                }
            }
        }
        ;

    grunt.initConfig(taskConfig);

    grunt.renameTask('watch', 'delta');
    grunt.registerTask('test', ['jshint:src', 'jshint:test', 'mochaTest:specs']);
    grunt.registerTask('build', ['test']);
    grunt.registerTask('watch', ['test', 'delta']);

    /*
     * This is a wrapper to blanket.js used for grunt mocha tests. It's a little hacky, but no hackier than the rest
     * of the solutions out there. We're loading the same instrumentation that we would use at the command line.
     */


};