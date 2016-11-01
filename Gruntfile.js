'use strict';

const path = require('path');

module.exports = function (grunt) {
    let gruntConfig = {};

    gruntConfig.clean = {
        styles: ['./public/css/**/*']
    };

    gruntConfig.sass = {
        dist: {
          options: {
            loadPath: [
                './bower_components/bcapp-pattern-lab/dist/scss/',
                './node_modules/bcapp-pattern-lab/dist/scss/'
            ],
            noCache: true,
            sourcemap: 'none',
            style: 'compact'
          },
          files: {
            './public/css/main.css': './src/scss/main.scss'
          }
        }
    };

    gruntConfig.watch = {
        options: {
            spawn: false,
            interrupt: true
        },

        styles: {
            files: ['./src/scss/**'],
            tasks: ['clean', 'sass']
        }
    };

    grunt.initConfig(gruntConfig);
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask(
        'styles',
        function () {
            let tasks = ['clean', 'sass', 'watch'];

            grunt.task.run(tasks);
        }
    );
};
