var Course = function(){
	/* create course model */
	var courseModel = Backbone.Model.extend({
		defaults: {
			'cTitle': 'Course Title',
			'cNumber': 'Course Number',
			'cDateTime': 'Course Date Time',
			'cDescription': 'Course Description',
			'cObjective': 'Course Objective'
		}
	});


	/* course page view */
	var courseView = Backbone.View.extend({
		tagName: 'div',
		className: '',
		template: _.template($('#template_1').html()),
		events: {

		},
		render: function() {
			
			var $el = $(this.el);
			$el.html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return {
		init: function(){
			console.log('course init');
			this.courseModel = new courseModel();

			this.courseView = new courseView({
				model: this.courseModel
			});

			$('.content').append(this.courseView.render().el);
		},

		exportHtml: function(){
			console.log($('.content').html());
			return true;
		}
	}

};


$('document').ready(function(){
	course = new Course();
	course.init();


	//Setup nicEdit for editable field
	var myNicEditor = new nicEditor({
		'iconsPath': 'scripts/nicEditorIcons.gif', 
		'fullPanel': true
	});	
	
	myNicEditor.setPanel('editPanel');

	// myNicEditor.panelInstance('cTitle');
	$('.content .editable').each(function(){
		var id = $(this).attr('id');
		var editor = myNicEditor.addInstance(id);

	});	


	//update model on text change
	$('.content').delegate('.editable', 'blur', function(){
		var id = $(this).attr('id');
		course.courseModel.set(id, $(this).html());
	})


});