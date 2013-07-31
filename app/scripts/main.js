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



function getBase64Image() { 
	
	p=document.getElementById("picField").value;
	var img = new Image();
	img.src = 'images/logo.png';
	var canvas = document.createElement("canvas"); 
	canvas.width = img.width; 
	canvas.height = img.height; 
	var ctx = canvas.getContext("2d"); 
	ctx.drawImage(img, 0, 0); 
	var dataURL = canvas.toDataURL("image/png"); 
	var dataURL = canvas.toDataURL("image/png"); 
	var r=dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
	base64=r;
	alert(base64);   
 
} 


$('document').ready(function(){
	//caching image 
	var img = new Image();
	img.src = 'images/logo.png';


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


	//track mouse movement pop up control dock when reaching bottom eadge
   $(document).mousemove(function(e){
      
    if (e.pageY + 200 > $(window).height()) {
      	
      	if (typeof popupdelay === 'undefined' ) {
			popupdelay = window.setTimeout(function(){
				$('#controlPanel').slideDown(300, function(){});
				popupdelay = undefined;
      		}, 1000);
      	} 
    } else {
    	if (typeof popupdelay !== 'undefined') {
    		console.log('hi here');
    		console.log(typeof popupdelay);
    		window.clearTimeout(popupdelay);
    		popupdelay = undefined;
    		$('#controlPanel').slideUp(300, function(){});
    	}
    }

   }); 


});