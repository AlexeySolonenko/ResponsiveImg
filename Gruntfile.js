'use strict';

module.exports = function(grunt) {
  // var concat = require('./grunt/concat.js');
  // Project configuration.
  grunt.initConfig({
    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
    '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true,
      }
      ,basic:{
        src: ['lib/<%= pkg.name %>.js','lib/*.js'],
        dest: 'dist/<%= pkg.name %>.js', 
      }
      ,extras:{
        src: '*.js',
        dest: 'img/sososo.js',
      }
    }
    ,uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      },
    },
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        options: {
          jshintrc: 'lib/.jshintrc'
        },
        src: ['lib/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      },
    }
    ,responsive_images:{
      options:{
        //engine:'im',
      }
      ,respimg1:{
        options:{}
        ,files:[{
          //'tennis_001.jpg':'img/tennis_009.jpg'
          src:'tennis_001.jpg'
		      ,dest:'img/ini/'
        }]
        //,src:'tennis_001.jpg'
		    //,dest:'img/tennis_009.jpg'
      }
      ,respimg2:{
        options:{}
        ,files:{
          '/tennis_002.jpg':'img/tennis_008.jpg'
        }
        //,src:'tennis_002.jpg'
		    //,dest:'img/tennis_008.jpg'
      }
    },
  });
  
  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-responsive-images');
  
  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit', 'concat', 'uglify']);
  grunt.registerTask('basic',['concat:basic']);
  grunt.registerTask('extras',['concat:extras']);
  grunt.registerTask('respimg11',['responsive_images:respimg1']);
  grunt.registerTask('respimg12',['responsive_images:respimg2']);
};
