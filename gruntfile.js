//Gruntfile
module.exports = function(grunt) {

    //Initializing the configuration object
    grunt.initConfig({
        // Task configuration
        less: {
            development: {
                files: {
                    './assets/stylesheets/frontend.css':'./assets/stylesheets/frontend.less',
                    './assets/stylesheets/media.css':'./assets/stylesheets/media.less'
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    './assets/stylesheets/frontend.min.css':'./assets/stylesheets/frontend.less',
                    './assets/stylesheets/media.min.css':'./assets/stylesheets/media.less'
                }
            }
        },
        watch: {
            less: {
                files: ['./assets/stylesheets/*less'],
                tasks: ['less'],
                options: {
                    livereload: true
                }
            }
        }
    });

    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Task definition
    grunt.registerTask('default', ['watch']);

};
