module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        autoprefixer: {
          main: {
            options: {
              browsers: ['> 1%', 'last 2 versions', 'ie >= 8'],
              map: true
            },
            src: 'css/*.css'
          }
        },

        concat: {
            dist: {
                files: {
                    'js/global.js' : [
                    'js/scripts/logging.js'
                    ]
                }
            },

            ie: {
                files: {
                    'js/ie.js' : [
                    'vendor/html5shiv/dist/html5shiv.js',
                    'vendor/selectivizr/selectivizr.js'
                    ]
                }
            }
        },

        concurrent: {
            target: {
                tasks: ['jekyll:server', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },

        jekyll: {
            server: {
                options: {
                    serve: true
                }
            },
            dev: {
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    sourcemap: 'true'
                },
                files: [{
                    expand: true,
                    cwd: 'sass',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },

        uglify: {
            dist: {
                files: [{
                expand: true,
                cwd: 'js',
                src: ['*.js', '!*.min.js'],
                dest: 'js',
                ext: '.min.js'
                }]
            }
        },

        watch: {
            css: {
                files: 'sass/**/*.scss',
                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false,
                    interrupt: true
                }
            },

            js: {
                files: 'js/**/*.js',
                tasks: ['concat:dist', 'uglify'],
                options: {
                    spawn: false,
                    interrupt: true
                }
            },

            jekyll: {
                files: ['**/*', '!node_modules/**', '!_site/**'],
                tasks: ['jekyll:dev'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['sass', 'autoprefixer', 'concat', 'uglify', 'concurrent:target']);

    // plugin tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
}