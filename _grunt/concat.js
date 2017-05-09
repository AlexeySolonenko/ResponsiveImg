module.exports = {

	basic:{
		

      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['lib/<%= package.name %>.js','lib/*.js'],
        dest: 'dist/<%= package.name %>.js'
      }
	}
	
    ,extras:{
		

      options: {
      },
      dist: {
        src: '*.js',
        dest: './img/sososo.js'
      }
	}
	

};
    