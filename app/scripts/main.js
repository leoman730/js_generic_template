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

		}
	}

};


$('document').ready(function(){
	course = new Course();
	course.init();


	//Setup nicEdit for editable field
	
	
	
});