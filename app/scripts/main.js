var Course = function(){
	/* create course model */
	var courseModel = Backbone.Model.extend({
		defaults: {
			'cTitle': 'Course Title',
			'cNumber': 'Course Number',
			'cDateTime': 'Course Date Time',
			'cDescription': 'Course Description',
			'cObjective': 'Course Objective',
			'cMaterial': 'Course Material',
			'cSchedule': 'Course Schedule',
			'cGrading': 'Course Grading and Policy',

		}
	});


	/* course page view */
	var courseView = Backbone.View.extend({
		// tagName: 'div',
		className: '',
		template: _.template($('#template_blue').html()),
		
		initialize: function() {
    		this.listenTo(this.model, "change", this.render);
  		},
		
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
			this.courseModel = new courseModel();

			this.courseView = new courseView({
				model: this.courseModel
			});

			$('.content').html(this.courseView.render().el);

			this.setDefaulValue();

			this.setupEditor();

			//update model on text change
			$('.content').delegate('.editable', 'blur', function(){
				var id = $(this).attr('id');
				//course.courseModel.set(id, $(this).html());
			})

		},
		setupEditor: function() {
			var that = this;

			if (this.myNicEditor) {
				$('.content .editable').each(function(){
					var id = $(this).attr('id');
					var editor = that.myNicEditor.removeInstance(id);
					$('#editPanel').html('');
				});	
			}

			//Setup nicEdit for editable field
			this.myNicEditor = new nicEditor({
				'iconsPath': 'http://js.elab.io/images/nicEditorIcons.gif', 
				'fullPanel': true
			});	
			
			this.myNicEditor.setPanel('editPanel');
			// myNicEditor.panelInstance('cTitle');
			$('.content .editable').each(function(){
				var id = $(this).attr('id');
				var editor = that.myNicEditor.addInstance(id);

			});	
		},

		setDefaulValue: function() {
			this.courseModel.set('cTitle', 'Javascript <font size="2" color="#666666">(<span style="font-family: inherit; font-weight: bold; line-height: 40px;">ECMAScript)</span></font>');
			this.courseModel.set('cDescription', '<div>Instructor: Sam Sultam</div><div>Course Number: INFO1-CE9755&nbsp;</div><div>Time: Wednesday - 6:00-9:30pm</div><div>Class web site: <a href="samsultan.com/javascript" title="" target="">samsultan.com/javascript</a></div><div>Email: sam.sultan @ nyu.edu</div><div><br></div><div><br></div><div><p style="outline: none; margin-top: 8px; margin-bottom: 8px;"><span class="centSm" style="outline: none;"><font face="helvetica" size="6">About the Professor<br><br></font></span></p><p style="outline: none; margin-top: 8px; margin-bottom: 8px;">Adjunct Assistant Professor, Management and Information Technology<br></p><p style="outline: none; margin-top: 8px; margin-bottom: 8px;">"In the technology field, learning is a lifetime commitment," says Sam Sultan, director of Information Technology at Home Box Office (HBO), and&nbsp;<a href="http://www.scps.nyu.edu/academics/departments/information-technology/academic-offerings/graduate/ms-management-and-systems.html" style="outline: none;">M.S. in Management and Systems</a>&nbsp;adjunct assistant professor.<br style="outline: none;"></p><p style="outline: none; margin-top: 8px; margin-bottom: 8px;">While looking to jumpstart his career at HBO, Sultan earned professional certificates in Java, Web development, and C/Unix at NYU-SCPS. The practical knowledge and skills he acquired helped him to advance to his current position, in which he designs financial applications and supervises a staff of more than 10 IT professionals. Now, Sultan has taken it upon himself to give other IT professionals the same advantage.</p><p style="outline: none; margin-top: 8px; margin-bottom: 8px;">"I was so impressed with the program and the quality of education that I received, that when the opportunity arose to teach at the School, I seized upon it," Sultan asserts, emphasizing the Department’s two-fold advantage over other non-academic programs. "First, learning is very much about doing and our focus is hands-on. Second, because the practitioner&nbsp;<a href="http://www.scps.nyu.edu/academics/departments/information-technology/about/faculty/faculty-directory.html" style="outline: none;">faculty</a>&nbsp;is comprised of active leaders in their fields, they experience new technology first-hand and pass that on to their students." This is a competitive advantage, he explains, that\'s just not available in a more traditional, non-academic setting.</p><p style="outline: none; margin-top: 8px; margin-bottom: 8px;">Given the rapid pace of changes in technology, the Department focuses on teaching students more than just the specific commands of a particular language; rather, instructors aim to develop the skills and the knowledge that will allow them to continue to learn as they work in the field. According to Sultan, "students develop a rich understanding of the concepts that drive the engine of technology, so they can meet new challenges and solve problems as they arise."</p><p style="outline: none; margin-top: 8px; margin-bottom: 8px;">"Technology is a wonderful career path," says Sultan. "It’s fun, and there aren’t too many professions you can say that about. I promise my students at the beginning of each class that they will learn a tremendous amount, but that they also will have fun doing it. And they always do."</p></div><div><br></div><div><br></div>');
			this.courseModel.set('cObjective', '<div>The objective of this course is to teach you JavaScript as it relates to web page development. The course will discuss JavaScript core language, including JavaScript data types and variables, expressions and operators, functions, arrays and objects. We will also examine the Document Object Model and JavaScript event model, and will explain how you can use these to interact with HTML components to create dynamic web content. The course will also show you how to interact with HTML forms, and how to create, manipulate and save client-side cookies.</div><div><br></div><div>In addition the course will also examine Cascading Style Sheet and DHTML, and will teach you how to create dynamic HTML components by creating and manipulating HTML content through their DOM element objects. The course completes with some discussions on advanced topics such as jQuery, AJAX and OO. jQuery is a very popular javaScript library that makes coding and interacting with HTML elements much simpler. AJAX allows you to perform dynamic asynchronous communications with the server to obtain and present data more interactively. And OO which stands for object oriented teaches you techniques for writing object oriented JavaScript.</div><div><br></div><div><p>The focus of the course will be on the following topics:</p><p></p><ul><li>JavaScript core language</li><li>The DOM - Document Object Model</li><li>JavaScript events and event handling</li><li>CSS - Cascading Style Sheets</li><li>Creating an manipulating DHTML components</li><li>Some discussion on jQuery, AJAX and Object Oriented coding</li></ul></div>');
			this.courseModel.set('cMaterial', '<p>Required Books -</p><ul><li>Beginning JavaScript (4th Edition)<ul><li>Authors&nbsp;- Paul Wilton &amp; Jeremy McPeak</li><li>Publisher&nbsp;- Wrox Press</li></ul></li></ul><div><br></div>Suggested Books -<ul><li>JavaScript - The Definitive Guide (6th Edition)</li><ul><li>Authors&nbsp;- David Flanagan</li><li>Publisher<font color="#000000" face="Times" size="3"><span style="line-height: normal;">&nbsp;</span></font>- O\'Reilly</li></ul></ul>');
			this.courseModel.set('cSchedule', '<table cellspacing="0" border="0"><tbody><tr><td bgcolor="lightblue" width="80">DATE</td><td bgcolor="lightblue" width="60" align="CENTER">SESSION</td><td bgcolor="lightblue" width="400" align="CENTER">TOPIC[s] COVERED</td></tr><tr bgcolor="#ffffff" valign="top"><th align="left">[Week 1]</th><td align="center"><a href="http://oit.scps.nyu.edu/~sultans/javascript/frame.html?intro">1</a></td><td align="left"><li>Introduction to JavaScript</li><li>HTML and scripting languages</li><li>Where to insert JavaScript in HTML</li><li>The&nbsp;&lt;script&gt;&nbsp;tag</li><li>JavaScript&nbsp;variables&nbsp;and data types</li><li>Numeric and String operators</li><li>Comparison and Logical operators</li><li>JavaScript&nbsp;Arrays&nbsp;and&nbsp;Objects</li><li>What is an array?</li><li>Accessing array elements</li><li>What is an object?</li><li>Object properties and methods&nbsp;<br><br></li></td></tr><tr><td></td><td align="left">Reading:&nbsp;&nbsp;</td><td align="left">Chapters 1, 2, 5 (pages 133-138)</td></tr><tr><td>&nbsp;</td></tr><tr bgcolor="#ffffff" valign="top"><th align="left">[Week 2]</th><td align="center"><a href="http://oit.scps.nyu.edu/~sultans/javascript/frame.html?logic">2</a></td><td align="left"><li>Basic JavaScript programming concepts</li><li>The&nbsp;if&nbsp;statement</li><li>The&nbsp;else&nbsp;condition</li><li>The&nbsp;switch&nbsp;and&nbsp;case&nbsp;statements</li><li>The&nbsp;for&nbsp;and&nbsp;for..in&nbsp;loops</li><li>The&nbsp;while&nbsp;and&nbsp;do..while&nbsp;loops</li><li>The&nbsp;break&nbsp;and&nbsp;continue&nbsp;statements</li><li>The&nbsp;label&nbsp;identifier</li><li>Defining functions</li><li>Passing parameters and receiving data from functions</li><li>Variable scope and the&nbsp;var&nbsp;statement&nbsp;<br><br></li></td></tr><tr><td></td><td align="left">Reading:</td><td align="left">Chapter 3</td></tr><tr><td>&nbsp;</td></tr><tr bgcolor="#ffffff" valign="top"><th align="left">[Week 3]</th><td align="center"><a href="http://oit.scps.nyu.edu/~sultans/javascript/frame.html?browser">3</a></td><td align="left"><li>The Browser Objects</li><li>The Browser Object Hierarchy</li><li>The&nbsp;Window&nbsp;object</li><li>The&nbsp;History&nbsp;object</li><li>The&nbsp;Location&nbsp;object</li><li>The&nbsp;Navigator&nbsp;object</li><li>The&nbsp;Screen&nbsp;object</li><li>Opening up additional windows</li><li>Accessing other frames</li><li>JavaScript events and event handling</li><li>Setting up timers&nbsp;<br><br></li></td></tr><tr><td></td><td align="left">Reading:</td><td align="left">Chapters 6 (first half), 8</td></tr><tr><td>&nbsp;</td></tr><tr bgcolor="#ffffff" valign="top"><th align="left">[Week 4 &amp; 5]</th><td align="center"><a href="http://oit.scps.nyu.edu/~sultans/javascript/frame.html?dom">4/5</a></td><td align="left"><li>The Document Object Model</li><li>The&nbsp;Document&nbsp;object</li><li>The&nbsp;Image&nbsp;object</li><li>Creating an image rollover effect</li><li>The&nbsp;Form&nbsp;object</li><li>The elements&nbsp;Input&nbsp;object</li><li>Common properties and methods</li><li>The&nbsp;Select&nbsp;and&nbsp;option&nbsp;objects</li><li>Interacting with HTML form elements</li><li>Validating data entered in a form&nbsp;<br><br></li></td></tr><tr><td></td><td align="left">Reading:</td><td align="left">Chapters 6 (second half), 7</td></tr><tr><td>&nbsp;</td></tr><tr bgcolor="#ffffff" valign="top"><th align="left">[Week 6]</th><td align="center"><a href="http://oit.scps.nyu.edu/~sultans/javascript/frame.html?dhtml">6</a></td><td align="left"><li>Midterm Exam&nbsp;<br><br></li><li>Core DOM&nbsp;and&nbsp;DHTML&nbsp;Effects</li><li>Cross browser challenges</li><li>Core DOM in modern W3C compliant browsers</li><li>The&nbsp;HTMLElement&nbsp;Object</li><li>The element&nbsp;Style&nbsp;Object</li><li>Accessing HTML elements</li><li>Altering the content of HTML elements</li><li>Altering the style of HTML elements</li><li>Hiding and showing content</li><li>Dynamically creating HTML elements &amp; attributes</li><li>Unobstrusive&nbsp;JavaScript&nbsp;<br><br></li></td></tr><tr><td></td><td align="left">Reading:</td><td align="left">Chapter 12</td></tr><tr><td>&nbsp;</td></tr><tr bgcolor="#ffffff" valign="top"><th align="left">&nbsp;</th><td align="center"><a href="http://oit.scps.nyu.edu/~sultans/html/frame.html?css1">css1</a>&nbsp;<br><br><br><br><br><br><br><br><br><a href="http://oit.scps.nyu.edu/~sultans/html/frame.html?css2">css2</a></td><td align="left"><li>CSS - Cascading Style Sheets</li><li>Structure of a CSS rule</li><li>Inline, embedded and external CSS</li><li>Creating style sheets</li><li>Applying styles to your HTML</li><li>CSS&nbsp;selectors</li><li>Class&nbsp;and&nbsp;Id&nbsp;selectors</li><li>Cascading and Inheritance rules&nbsp;<br><br></li><li>CSS&nbsp;Properties&nbsp;and Values&nbsp;<br><br></li></td></tr><tr><td></td><td align="left">Reading:</td><td align="left">Online @&nbsp;<a href="http://www.w3schools.com/css/">www.w3schools.com/css</a></td></tr><tr><td>&nbsp;</td></tr><tr bgcolor="#ffffff" valign="top"><th align="left">[Week 7]</th><td align="center"><a href="http://oit.scps.nyu.edu/~sultans/javascript/frame.html?object">7</a></td><td align="left"><li>JavaScript built-in objects</li><li>The&nbsp;Math&nbsp;object</li><li>The&nbsp;String&nbsp;object</li><li>String manipulation</li><li>The&nbsp;Array&nbsp;object</li><li>Sorting arrays with additional helper functions</li><li>The&nbsp;Date&nbsp;object</li><li>Date manipulation</li><li>Conversion between data types&nbsp;<br><br></li></td></tr><tr><td></td><td align="left">Reading:</td><td align="left">Chapters 5, 9, 10</td></tr><tr><td>&nbsp;</td></tr><tr bgcolor="#ffffff" valign="top"><th align="left">[Week 8]</th><td align="center"><a href="http://oit.scps.nyu.edu/~sultans/javascript/frame.html?cookie">8</a></td><td align="left"><li>What is a&nbsp;cookie?</li><li>The structure of HTTP cookies</li><li>Storing data in a cookie</li><li>Transient&nbsp;vs.&nbsp;permanent&nbsp;cookies</li><li>Retrieving data from cookies</li><li>HTML5&nbsp;Web Storage</li><li>Working with&nbsp;sessionStorage&nbsp;and&nbsp;localStorage&nbsp;<br><br></li></td></tr><tr><td></td><td align="left">Reading:</td><td align="left">Chapter 11</td></tr><tr><td>&nbsp;</td></tr><tr bgcolor="#ffffff" valign="top"><th align="left">[Week 9]</th><td align="center"><a href="http://oit.scps.nyu.edu/~sultans/ajax/frame.html?js">9a</a></td><td align="left"><li>AJAX&nbsp;- Asynchronous JavaScript and XML</li><li>Basic client/server web communication</li><li>The&nbsp;HTTP request/response&nbsp;paradigm</li><li>Asynchronous server communication</li><li>The&nbsp;XMLHttpRequest&nbsp;Object</li><li>XML data Streams</li><li>Advantages of asynchronous processing</li><li>Ajax examples&nbsp;<br><br></li></td></tr><tr><td></td><td align="left">Reading:</td><td align="left">Chapter 14</td></tr><tr><td>&nbsp;</td></tr><tr bgcolor="#ffffff" valign="top"><th align="left">&nbsp;</th><td align="center"><a href="http://oit.scps.nyu.edu/~sultans/jquery/frame.html?intro">9b</a></td><td align="left"><li>jQuery&nbsp;- JavaScript Library</li><li>Downloading and using jQuery library</li><li>Typical tasks you perform with jQuery</li><li>Selecting elements from the DOM</li><li>Changing element content</li><li>Adding/Changing/Removing attributes</li><li>Adding/Removing/Toggling CSS classes</li><li>Adding/Changing CSS properties</li><li>Adding/Replacing/Removing elements</li><li>jQuery built-in animation effects</li><li>Working with element Set</li><li>Working with arrays and objects&nbsp;<br><br></li></td></tr><tr><td></td><td align="left">Reading:</td><td align="left">Online @&nbsp;<a href="http://jquery.com/">jquery.com</a></td></tr><tr><td>&nbsp;</td></tr><tr bgcolor="#ffffff" valign="top"><th align="left">[Week 10]</th><td align="center"><a href="http://oit.scps.nyu.edu/~sultans/javascript/frame.html?oo">10</a></td><td align="left"><li>Final Exam</li><li>Final Project Class Presentations&nbsp;<br><br></li><li>JavaScript Object Oriented Concepts.</li><li>Objects&nbsp;vs.&nbsp;Classes.</li><li>Defining Object&nbsp;Constructors.</li><li>Defining&nbsp;Properties&nbsp;and&nbsp;Methods.</li><li>Instantiating&nbsp;Objects.</li><li>Class vs. Instance properties and methods.</li><li>The&nbsp;"This"&nbsp;keyword.</li><li>Defining Object&nbsp;prototype.&nbsp;<br><br></li></td></tr><tr><td></td><td align="left">Reading:</td><td align="left">Chapter 8 (Javascript - The Definitive Guide)</td></tr></tbody></table>');
			this.courseModel.set('cGrading', '<p>For&nbsp;non-credit&nbsp;and NYU Undergraduate&nbsp;2 credit&nbsp;students, your final grade will be based on the following:</p><ul><li>Midterm Exam -&nbsp;30%</li><li>Final Exam -&nbsp;30%</li><li>Web Site Project -&nbsp;20%</li><li>Homework &amp; Class Participation -&nbsp;10%</li><li>Attendance -&nbsp;10%</li></ul><p>For NYU Undergraduate&nbsp;4 credit&nbsp;students, your final grade will be based on the following:</p><ul><li>Midterm Exam -&nbsp;25%</li><li>Final Exam -&nbsp;25%</li><li>Project Proposal -&nbsp;10%</li><li>Web Site Project -&nbsp;20%</li><li>Homework &amp; Class Participation -&nbsp;10%</li><li>Attendance -&nbsp;10%</li></ul><p>How to Submit Homeworks.</p><p>- Homework assignments are always due the next session we meet.<br>- Print out your homework code and output and bring with you to class the next time we meet.<br>- I will either collect, or will ask students to discuss their solutions in class.<br>- I will not accept homework via email unless you are not able to attend the class.<br>- Proper indentation is a must. If not properly indented I may return it without grading it.<br>- Multiple pages should be stapled together.</p><p>Grades are FINAL.</p><p>Please do not negotiate for a better grade. If you are expecting to receive a grade of an "A" at the end of the semester, then I expect you to attend all sessions (unless I am notified ahead of time), to participate in these sessions, to keep up with the class reading material, and to complete your homework assignments. This will ensure that you stay current with the class content, and will ensure that you get a good grade on your test(s), project as well as your final grade.</p><p>If you are a&nbsp;non-credit&nbsp;student, and are&nbsp;not&nbsp;interested in a grade, or you do not submit your homeworks/project or take the exams, then you will receive a grade of an "NE" (Non-Evaluative). A grade of NE is final, and cannot be changed. A grade of NE cannot be applied as partial fulfillment for any NYU certificate program.&nbsp;<br><br></p><hr width="60%"><p>To receive your final grade&nbsp;at the end of the semester, follow these steps:<br></p><ol><li>click on http://www.scps.nyu.edu/academics/noncredit-offerings/academic-noncredit-policies-and-procedures.html#Obtaining_Grades</li><li>Log into Albert using your net id, at:&nbsp;<a href="https://admin.portal.nyu.edu/psp/paprod/EMPLOYEE/EMPL/h/?tab">https://admin.portal.nyu.edu/psp/paprod/EMPLOYEE/EMPL/h/?tab</a></li><li>Click on "Student Center"</li><li>Within your student center, in the "academics" section click on the dropdown: "other academic"</li><li>From the dropdown select "grades"</li><li>For complete instructions click&nbsp;<a href="http://www.scps.nyu.edu/academics/noncredit-offerings/academic-noncredit-policies-and-procedures.html#Obtaining_Grades">here</a></li></ol>');

		},
		exportHtml: function(){
			var head = $('head').html();
			var body = '<body>' + $('#main').html() + $('#scriptsContainer').html() + '</body>';
			
			var win = window.open('', '_blank', 'toolbar=0,location=0,menubar=0');


			var source = String( head + body );

			source = '<pre>' +  '&lt;!DOCTYPE html>\n&lt;html>\n' + 
					source .replace(/[<>]/g, function(m) { return {'<':'&lt;','>':'&gt;'}[m]})
					 .replace(/((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi,'<a href="$1">$1</a>')
					 .replace(/editable/gi, '') + '\n&lt;/html></pre>';
			win.document.write(source);


			return true;
		}
	}

};

function setBgImage(src) {
	var img = new Image();
	img.src = src;


	window.setTimeout(function(){ 
		canvas = document.createElement("canvas"); 
		console.log(img.width);
		canvas.width = img.width; 
		canvas.height = img.height; 
		var ctx = canvas.getContext("2d"); 
		ctx.drawImage(img, 0, 0); 
		var dataURL = canvas.toDataURL("image/jpg"); 
		//var dataURL = canvas.toDataURL("image/png"); 
		//var r=dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
		//base64=r;
		console.log(dataURL);   
		$('#bg_img').attr('src', dataURL);
	 }, 2000);
} 



$('document').ready(function(){
	//caching image 
	img = new Image();
	img.src = 'images/ball.png';


	course = new Course();
	course.init();



	// update bg image
	$('#setBgBtn').click(function(){
		var src64 = setBgImage($('#bg').val());
		 		
	});

	// update font size
	$('#fontSize').on('change', function(e){
		$('.content').css({
			'font-size': $(this).val()
		});
	});


	// update font style 
	$('#fontStyle').on('change', function(e){
		$('.content').css({
			'font-family': $(this).val() 
		});
	});

	// update template
	$('#template').on('change', function(e){
		$('#curtain').addClass('show');
		var value = $(this).val();
		window.setTimeout(function(){
			course.courseView.template = _.template($('#'+value).html());
			$('.content').html(course.courseView.render().el);
			course.setupEditor();
		}, 3000);

		window.setTimeout(function(){
			$('#curtain').removeClass('show');
		}, 4000);

	});


	// update year
	var currentYear = (new Date).getFullYear();
	$('#cpyear').text(currentYear);

	//track mouse movement pop up control dock when reaching bottom eadge
   $(document).mousemove(function(e){
      
    if (e.pageY + 300 > $(window).height()) {
      	
      	if (typeof popupdelay === 'undefined' ) {
			popupdelay = window.setTimeout(function(){
				$('#controlPanel').slideDown(300, function(){});
				popupdelay = undefined;
      		}, 1000);
      	} 
    } else {
    	if (typeof popupdelay !== 'undefined') {
    		window.clearTimeout(popupdelay);
    		popupdelay = undefined;
    		$('#controlPanel').slideUp(300, function(){});
    	}
    }

   }); 

   	// activate tab
   	if ($('#myTab').length > 0) {
   		$('body').delegate('#myTab a', 'click', function(e){
   			e.preventDefault();
  			$(this).tab('show');
   		});
   	};

   	// export 
   	$('#export').on('click', function(e){
   		course.exportHtml();
   	});

});
