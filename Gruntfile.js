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

        watch: {
            css: {
                files: 'sass/*.scss',
                tasks: ['sass', 'autoprefixer', 'jekyll:dev'],
                options: {
                    spawn: false,
                    interrupt: true,
                    livereload: true
                }
            },

            jekyll: {
                files: ['*.html', '*.md', '_layouts/*', '_includes/*', '_drafts/*', '_posts/*', 'js/*'],
                tasks: ['jekyll:dev'],
                options: {
                    spawn: false,
                    interrupt: true,
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['sass', 'autoprefixer', 'concurrent:target']);

    // plugin tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-concurrent');
}