'use strict';

const path = require('path');

module.exports = function (grunt) {
    let gruntConfig = {};

    gruntConfig.sass = {
        dist: {
          options: {
            noCache: true,
            sourcemap: 'none',
            style: 'compact'
          },
          files: {
            'public/main.css': 'src/css/main.scss'
          }
        }
    };

    grunt.initConfig(gruntConfig);
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask(
        'styles',
        function () {
            let tasks = ['sass'];

            grunt.task.run(tasks);
        }
    );
};
