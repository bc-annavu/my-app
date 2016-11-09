'use strict';

const path = require('path');

module.exports = function (grunt) {
    let gruntConfig = {};

    gruntConfig.clean = {
        styles: ['./public/css/**/*'],
        fonts: ['./public/fonts/**/*']
    };

    gruntConfig.copy = {
        styles: {
            expand: true,
            cwd: './bower_components/bcapp-pattern-lab/dist/css/',
            src: '**',
            dest: './public/css/',
            flatten: true
        },
        js: {
            expand: true,
            cwd: './bower_components/bcapp-pattern-lab/dist/js/',
            src: '**',
            dest: './public/js/',
            flatten: true
        },
        fonts: {
            expand: true,
            cwd: './src/fonts/',
            src: '**/*',
            dest: './public/fonts/'
        }
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
            tasks: ['clean', 'copy', 'sass']
        }
    };

    grunt.initConfig(gruntConfig);
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask(
        'styles',
        function () {
            let tasks = ['clean', 'copy', 'sass', 'watch'];

            grunt.task.run(tasks);
        }
    );
};
