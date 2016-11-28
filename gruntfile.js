


module.exports = function (grunt) {

	
	
	require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

			htmlhint: {
    			build: {
			        options: {
			            'tag-pair': true,
			            'doctype-first': true,
			            'id-unique': true,
			            'head-script-disabled': true,
			            'style-disabled': true
		        	},
		        	src: ['Template.html']
		    	}
			},

			sass: {
			    dist: {
			        files: {
			            'css/stylescss.css': 'sass/stylescss.scss'
			        }
			    }
			},


			uglify: {
			    build: {
			        files: {
			            'script.min.js': ['script.js']
			        }
			    }
			},


			watch: {
				html: {
					files: ['Template.html'],
					tasks: ['htmlhint']
				},
				css: {
					files: 'sass/*.scss',
					tasks: ['sass']
				},
				js: {
					files: ['script.js'],
					tasks: ['uglify']
				}
			}


			

			
	
	});	




	grunt.registerTask('default', []);

};