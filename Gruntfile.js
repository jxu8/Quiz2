/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function (grunt) {
    // Automatically load required grunt tasks
  require('jit-grunt')(grunt, {
    useminPrepare: 'grunt-usemin'
  });
    
    // Project configuration.
    grunt.initConfig({
         watch: {
            sass: {
              files: ['public_html/*.{scss,sass}'],
              tasks: ['sass']
      }
    },
        sass: {
            options: {
            },
            dist: {
              files: [{
                expand: true,
                cwd: 'public_html',
                src: ['*.{scss,sass}'],
                dest: 'public_html',
                ext: '.css'
              }]
            }
          }
    });
    
    // Automatically load required grunt tasks
//  require('jit-grunt')(grunt, {
//    useminPrepare: 'grunt-usemin'
//    });
    
    
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [
    "sass:dist",
    "watch"
  ]);
};
