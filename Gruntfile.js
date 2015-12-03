module.exports = function(grunt) {
    grunt.initConfig({
        clean: ["public/static/css-dist/*.css", "public/static/javascripts-dist/*.js"],
        concat: {
            options: {
                separator: ';',
            },
            basics: {
                src: ['public/static/javascripts/*.js'],
                dest: 'public/static/javascripts-dist/bundle.min.js',
            },
        },
        uglify: {
            my_target: {
                files: {
                    'public/static/javascripts-dist/bundle.min.js': ['public/static/javascripts/*.js']
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
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['public/static/css/*.css'],
                tasks: ['compass'],
            },
        },

    });
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');

    grunt.registerTask('build', ['clean', 'cssmin', 'uglify']);
};
