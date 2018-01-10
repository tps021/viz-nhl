module.exports = function(grunt) {

    // Initialize the grunt configuration
    grunt.initConfig({
        // Import the package configuration
        pkg: grunt.file.readJSON('package.json'),

        // Configure the concat task
        concat: {
            js: {
                src: [
                    'src/start.js',
                    'src/svg/svg.js',
                    'src/svg/transform.js',
                    'src/chart/chart.js',
                    'src/chart/heatmap.js',
                    'src/layout/layout.js',
                    'src/layout/matrix.js',
                    'src/end.js'
                ],
                dest: 'windmill.js'
            }
        },

        // Uglify Configuration
        uglify: {
            options: {
                mangle: false
            },
            js: {
                files: {
                    'windmill.min.js': ['windmill.js']
                }
            }
        },

        // JSHint Configuration
        jshint: {
            all: [
                'Gruntfile.js',
                'src/chart/*.js',
                'src/svg/*.js',
                'src/layout/*.js',
                'test/*.js',
                'test/*/*.js'
            ]
        }
    });

    // Enable the grunt plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

};