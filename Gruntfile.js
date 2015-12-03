var mozjpeg = require('imagemin-mozjpeg');
module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['public/static/css/*.css'],
                tasks: ['cssmin'],
            },
            js: {
                files:['public/static/javascripts/*.js','public/static/javascripts_page/*.js'],
                tasks: ['uglify'],
            }
        },
        imagemin: { // Task

            dynamic: { // Another target
                files: [{
                    expand: true, // Enable dynamic expansion
                    cwd: 'public/images/', // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'], // Actual patterns to match
                    dest: 'public/images-dist/' // Destination path prefix
                }]
            }
        },
        clean: ["public/static/css-dist/*.css", "public/static/javascripts-dist/*.js"],
        concat: { // not using here
            options: {
                separator: ';',
            },
            basics: {
                src: ['public/static/javascripts/*.js', 'public/static/javascripts_page/*js'],
                dest: 'public/static/javascripts-dist/concat.min.js',
            },
        },
        uglify: {
            my_target: {
                files: {
                    'public/static/javascripts-dist/bundle.min.js': ['public/static/javascripts/*.js', 'public/static/javascripts_page/*js']
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'public/static/css-dist/bundle.min.css': ['public/static/css/*.css']
                }
            }
        }


    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('build', ['clean', 'cssmin', 'uglify', 'imagemin']);

};
