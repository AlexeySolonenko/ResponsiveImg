'use strict';

module.exports = function(grunt) {
  
  require('load-grunt-config')(grunt);
  grunt.registerTask('default', ['jshint', 'nodeunit', 'uglify']);
  grunt.registerTask('testTask','nodeunit');
  grunt.registerTask('imgRespTest','responsive_images');
  grunt.registerTask('concate','concat:extras');
  //grunt.registerTask('respimg','respimg');
  grunt.task.registerMultiTask('concat', 'Log stuff.', function() {
	grunt.log.writeln(this.target + ': ' + this.data);
  });
  grunt.registerTask('sometask', 'My "default" task description.', function() {
    grunt.log.writeln('Currently running the "default" task.');
  });  
};
