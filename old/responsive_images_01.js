module.exports = {
	srcset01:{
		options: {
	  // Task-specific options go here. 
		//engine:'im',
		}
		,files: {
		  // Target-specific file lists and/or options go here. 
		  //'tennis_001.jpg' : 'tennis_002.jpg'
		  // expand: true
		   src:['file:///D:/Dropbox/0us/UdacityAlxs/ResponsiveImg/tennis_001.jpg']
		  ,dest: 'file:///D:/Dropbox/0us/UdacityAlxs/ResponsiveImg/img/tennis_001.jpg'
		}
	}
	,compress01:{
		options: {
	  // Task-specific options go here. 
		//engine:'im',
		}
		,files: {
		  // Target-specific file lists and/or options go here. 
		  //'tennis_001.jpg' : 'tennis_002.jpg'
		  //expand: true
		  src:['img/tennis_002.jpg']
		  ,dest: 'img/page01/tennis002.jpg'
		}
	}
};