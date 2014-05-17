module.exports = function (grunt) {

    // Force use of Unix newlines
    grunt.util.linefeed = '\n';

    RegExp.quote = function (string) {
        return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    };

    var fs = require('fs');
    var path = require('path');

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
            ' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright 2013-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n' +
            ' */\n',
        qunit: {
            all: ['js/specs/**/*.html']
        },
        jshint: {
            options: {
                browser: true
            },
            files: ['Gruntfile.js', 'js/dev/*.js']
        },
        uglify: {
            options: {
                compress: true
            },
            //    options: {
            //        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            //'<%= grunt.template.today("yyyy-mm-dd") %> */'
            //    },

            dollarbill: {
                options: {
                    banner: '<%= banner %>'
                },
                src: [
                'js/dev/mcompiler.js',
                'js/dev/mcompiler.localStorage.js',
                'js/dev/mcompiler.cssClass.js',
                'js/dev/mcompiler.visibility.js',
                'js/dev/mcompiler.utils.js',
                'js/dev/mcompiler.css.js',
                'js/dev/mcompiler.element.js',
                'js/dev/mcompiler.events.js',
                'js/dev/mcompiler.manipulate.js',
                'js/dev/mcompiler.load.js',
                'js/dev/mcompiler.utils.js'
                ],
                dest: 'js/<%= pkg.name %>.min.js'
            },
            dollarbillMovie: {
                src: [
                'js/dev/mcompiler.js',
                'js/dev/mcompiler.localStorage.js',
                'js/dev/mcompiler.cssClass.js',
                'js/dev/mcompiler.visibility.js',
                'js/dev/mcompiler.utils.js',
                'js/dev/mcompiler.load.js',
                'js/dev/mcompiler.utils.js'
                ],
                dest: 'js/movie/<%= pkg.name %>.min.js'
            }


        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    //   grunt.loadNpmTasks('grunt-contrib-jshint');
    //  grunt.loadNpmTasks('grunt-contrib-qunit');

    // Default task.
    grunt.registerTask('default', [/*'jshint', */'uglify' /* "qunit" */]);

};