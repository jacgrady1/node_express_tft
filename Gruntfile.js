module.exports = function(grunt) {
    grunt.initConfig({

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

    grunt.registerTask('build', ['cssmin']);
};
