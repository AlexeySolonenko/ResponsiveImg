module.exports = function(grunt) {


  grunt.initConfig({
	 
	concat:{
		dist: {
			src: [
				'js/libs/*.js', // All JS in the libs folder
				'js/global.js'  // This specific file
			],
			dest: 'js/build/production.js',
		}
	}
  });

  grunt.loadNpmTasks('grunt-responsive-images');
   grunt.registerTask('default', ['responsive_images']);


};
