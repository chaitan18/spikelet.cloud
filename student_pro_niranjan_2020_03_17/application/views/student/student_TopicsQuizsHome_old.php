<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed'); ?> 
<?php $this->load->view('student/header'); ?>	
<?php $this->load->view('student/side_menu');?>
<div id="Profile" class="tabcontent">
    <h3>Profile</h3>
       <pre>
       		Name : XXXX
        	Age  : xxxx
         	Num  : xxxx
       </pre>
</div>

<div id="Notification" class="tabcontent">
    <h3>Notification</h3>
    <p>You got 24 Notification</p> 
</div>
		
<div id="Tutorials" class="tabcontent" style="margin-top: 100px;">
	<div class="container">
		<div class="row"> 
			<div class="col-lg-5" >
				<div class = "panel panel-primary">
					<div class = "panel-heading">
						<h3 class = "panel-title">Spikelet- <?php echo $subjectname;?></h3>	  
					</div>

					<div class = "panel-body">
						<?php //var_dump($quizdata); ?>
						<table class="table table-hover table-striped">
							<thead>
								<tr>
									<th style="vertical-align: middle;">Topics</th>
									<th style="vertical-align: middle;">No.of Quizs</th>
									<th style="vertical-align: middle;">No.of Quizs remaining</th>
	 								<th style="vertical-align: middle;">Performances - Based on No.of. Questions Attempted</th>
								</tr>
							</thead>
							<tbody>
								<?php foreach($quizdata as $quiz){ ?>
									<tr>
	    								<td style="vertical-align: middle; text-align: center;"><?php echo $quiz['topic_name'];?></td>
	    								<td style="vertical-align: middle; text-align: center;"><?php echo $quiz['no_of_quizs'];?></td>
	    								<td style="vertical-align: middle; text-align: center;"><?php echo $quiz['no_of_quizs'];?></td>
										<td style="vertical-align: middle; text-align: center;"><?php echo 10;?></td>
	  								</tr>
	  							<?php } ?>
	  						</tbody>
						</table>
						<input type="hidden" name="subject_id" id="subject_id" value="<?php echo $subject_id ;?>"/>
						<input type="hidden" name="classid" id="classid" value="<?php echo $class_id;?>"/>
						<input type="hidden" name="spikelet_id" id="spikelet_id" value="<?php echo $spikelet_id;?>"/>
						<div class="row">
							<div class="col-lg-4">
								<select class="selectpicker form-control" id="topicsid" onchange="getsubtopics()">
	  								<option value="">Select Topic</option>
	  								<?php foreach($topicslist as $topics){ ?>
	  									<option value="<?php echo $topics['topic_id']; ?>"><?php echo $topics['topic_name']; ?></option>
	  								<?php } ?>
	  							</select>
	  							<p class="error topicsiderror" style="color: red;"></p>
							</div>
							<div class="col-lg-4">
								<select class="selectpicker form-control" id="subtopicid" onchange="getQuiz();">
	  								<option value="">Select sub Topic</option>
	  							</select>
	  							<p class="error subtopiciderror" style="color: red;"></p>
							</div>
							<div class="col-lg-4">
								<select class="selectpicker form-control" id="quizid">
	  								<option value="">Select Quiz</option>
	  							</select>
	  							<p class="error quiziderror" style="color: red;"></p>
							</div>
						</div>	  							
						<button type="button" class="btn btn-success btn-block" onclick="takeQuiz();" style="margin-top: 10px;">Take Test</button>
					</div>
				</div>
			</div>
			<div class="col-lg-6"  >
				<div id="takeQuiz">
					<div class = "panel panel-primary">
						<div class = "panel-heading">
							<h3 class = "panel-title">Start Quiz	</h3>
						</div>
						<div class = "panel-body">
							<table class="table">
								<thead>
	  								<tr>
										<th>Topics</th>
									</tr>
								</thead>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<script>
	$(function(){
		$('body').on('click', '.getnextquestion', function(){
			var student_id = <?php echo $this->session->userdata('std_id'); ?>;
			var qz_id = $("#quizid").val();
			var question_id = $('input[name="question_id"]').val();
			var opted_option = $('input[name="options"]:checked').val();
			if(typeof opted_option == 'undefined'){
				$('.optionerror').html('Please select any of option to get next question');
			}else{
				$.ajax({
					url		: 	"<?php echo base_url();?>index.php/Student_Controller/submitanswer",
					type	:	'POST',
					dataType:	'json',
					data 	:   { 
						'student_id' : student_id,
						'qz_id' : qz_id,
						'question_id' : question_id,
						'opted_option' : opted_option
					},
					error:function() {
						$("#takeQuiz").html('Some thing went wrong please try after some time');
					},
					success	:	function(data) {
						if(data.status == 1){
							takeQuiz();
						}else{
							$("#takeQuiz").html(data.msg);
						}
					}
				});
			}
			//takeQuiz();
		});

		$('body').on('click', '.submitquiz', function(){
			var student_id = <?php echo $this->session->userdata('std_id'); ?>;
			var qz_id = $("#quizid").val();
			var question_id = $('input[name="question_id"]').val();
			var opted_option = $('input[name="options"]:checked').val();
			$.ajax({
				url		: 	"<?php echo base_url();?>index.php/Student_Controller/submitquiz",
				type	:	'POST',
				dataType:	'json',
				data 	:   { 
					'student_id' : student_id,
					'qz_id' : qz_id,
					'question_id' : question_id,
					'opted_option' : opted_option
				},
				error:function() {
					$("#takeQuiz").html('Some thing went wrong please try after some time');
				},
				success	:	function(data) {
					if(data.status == 1){
						var status_message = '<div class = "panel panel-primary">\
							<div class = "panel-heading">\
								<h3 class = "panel-title">Exam Status</h3>\
							</div>\
							<div class = "panel-body">\
								<div class="row">\
									<div class="col-lg-12">\
										<h4>'+data.msg+'</h4>\
										<a href="<?php echo base_url(); ?>generatereport/'+qz_id+'" class="btn btn-success btn-block">Generate Report</a>\
									</div>\
								</div>\
							</div>\
						</div>';
						$("#takeQuiz").html(status_message);
					}else{
						$("#takeQuiz").html(data.msg);
					}
				}
			});
		});
	});

	function pageLoading(evt, cityName) {
    	var i, tabcontent, tablinks;
    	tabcontent = document.getElementsByClassName("tabcontent");
    	for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
    	}
    	tablinks = document.getElementsByClassName("tablinks");
    	for (i = 0; i < tablinks.length; i++) {
        	tablinks[i].className = tablinks[i].className.replace(" active", "");
    	}
    	document.getElementById(cityName).style.display = "block";
    	evt.currentTarget.className += " active";
	}
	// Get the element with id="defaultOpen" and click on it
	document.getElementById("defaultOpen").click();

	/*	function getsubtopics(){
		var spikelet_id= document.getElementById('spikelet_id').value;
		var subject_id= document.getElementById('subject_id').value;
		var topics= document.getElementById('topicsid').value;
		var classid= document.getElementById('classid').value;
		alert('classid'+classid);
		$.ajax({
			url		: 	"<?php echo base_url();?>index.php/examsController/classsectionexams/", 
			type	:	'POST',
			data 	:   { 
				'class_sec_ac_id' : idc,
				'ay_ac_id' : ay_id							
			},
			dataType:	'json',							
			success	:	function(data) {
				sel.append('<option value="">--Select--</option>');
				for(var i=0; i<=data.length;i++){
					sel.append('<option value="'+data[i].test_class_sec_ac_id+'">'+data[i].test_name+'</option>');
				}
			},
			error	:	function() {
				alert('No Exams Found');
				sel.append('<option value="">--Select--</option>');
			}
		});
	}*/


 	function getsubtopics() {
 		var topic_id = $("#topicsid").val();
		var subject = $("#subject_id").val();
		var classid = $("#classid").val();
		var spikelet_id = $("#spikelet_id").val();		
		$.ajax({
			url		: 	"<?php echo base_url();?>index.php/Student_Controller/getSubTopics/",
			type	:	'POST',			
			dataType:	'json',
			data 	:   { 
				'classid' : classid,
				'subject_id' : subject,
				'topic_id' : topic_id,		
				'spikelet_id' : spikelet_id		
			},
			error:function() {
				alert('No sub_topics Found');
				sel.append('<option value="">--Select--</option>');
			},						
			success	:	function(data) {
				var SUBTOPIC_HTML = '<option value="">Select Subtopic</option>';
				data.forEach(function(option, index){
					SUBTOPIC_HTML += '<option value="'+option.sub_topic_id+'">'+option.sub_topic_name+'</option>';
				});
				$("#subtopicid").html(SUBTOPIC_HTML);
			}
		});
 	}


	function getQuiz() {
		var topic_id = $("#topicsid").val();
		var subject = $("#subject_id").val();
		var classid = $("#classid").val();
		var spikelet_id = $("#spikelet_id").val();
		var subtopicid = $("#subtopicid").val();
		$.ajax({
			url		: 	"<?php echo base_url();?>index.php/Student_Controller/getQuiz/",
			type	:	'POST',
			dataType:	'json',
			data 	:   { 
				'classid' : classid,
				'subject_id' : subject,
				'topic_id' : topic_id,		
				'subtopic_id' : subtopicid,
				'spikelet_id' : spikelet_id		
			},
			error	:	function() {
				alert('No sub_topics Found');
				sel.append('<option value="">--Select--</option>');
			},			
			success	:	function(data) {
				var QUIZ_HTML = '<option value="">Select Subtopic</option>';
				data.forEach(function(option, index){
					QUIZ_HTML += '<option value="'+option.quiz_id+'">'+option.quiz_name+'</option>';
				});
				$("#quizid").html(QUIZ_HTML);
			}			
		});
 	}
  	
  	function takeQuiz() {
  		$('.error').html('');
		var topic_id = $("#topicsid").val();
		var subject = $("#subject_id").val();
		var classid = $("#classid").val();
		var spikelet_id = $("#spikelet_id").val();
		var subtopicid = $("#subtopicid").val();
		var quiz_id = $("#quizid").val();
		if(subject == '' || classid == '' || spikelet_id == '' || quiz_id == ''){
			if(topic_id == ''){
				$(".topicsiderror").html('This field is mandatory.');
			}
			if(subtopicid == ''){
				$(".subtopiciderror").html('This field is mandatory.');
			}
			if(quiz_id == ''){
				$(".quiziderror").html('This field is mandatory.');
			}
		}else{
			$.ajax({
				url		: 	"<?php echo base_url();?>index.php/Student_Controller/takeQuiz/",
				type	:	'POST',
				dataType:	'json',
				data 	:   { 
					'classid' : classid,
					'subject_id' : subject,
					'topic_id' : topic_id,
					'subtopic_id' : subtopicid,
					'spikelet_id' : spikelet_id	,
					'quiz_id'   : quiz_id
				},
				error	:	function() {
					$("#takeQuiz").html('Some thing went wrong please try again after some time');
				},
				success	:	function(data) {
					if(data.status == 0){
						if(typeof data.examstatus !== 'undefined' && data.examstatus == 1){
							var status_message = '<div class = "panel panel-primary">\
								<div class = "panel-heading">\
									<h3 class = "panel-title">Exam Status</h3>\
								</div>\
								<div class = "panel-body">\
									<div class="row">\
										<div class="col-lg-12">\
											<h4>'+data.message+'</h4>\
											<a href="<?php echo base_url(); ?>generatereport/'+quiz_id+'" class="btn btn-success btn-block">Generate Report</a>\
										</div>\
									</div>\
								</div>\
							</div>';
							$("#takeQuiz").html(status_message);
						}else{
							$("#takeQuiz").html('<h3 style="text-align:center; color:red">'+data.message+'<h3>');
						}
					}else{
						var QUESTION_HTML = '<div class = "panel panel-primary">\
							<div class = "panel-heading">\
								<h3 class = "panel-title">Question No : '+data.question_no+'</h3>\
							</div>\
							<div class = "panel-body">\
								<div class="row">\
									<div class="col-lg-12">\
										<input type="hidden" value="'+data.question.question_id+'" name="question_id" class="form-control">\
										Q.'+data.question_no+':'+data.question.question+'\
									</div>\
								</div>\
								<div class="row" style="margin-top:10px;">\
									<div class="col-lg-6" style="margin-top:10px;"><input type="radio" name="options" value="A" /> '+data.question.opt1+'</div>\
									<div class="col-lg-6" style="margin-top:10px;"><input type="radio" name="options" value="B" /> '+data.question.opt2+'</div>\
									<div class="col-lg-6" style="margin-top:10px;"><input type="radio" name="options" value="C" /> '+data.question.opt3+'</div>\
									<div class="col-lg-6" style="margin-top:10px;"><input type="radio" name="options" value="D" /> '+data.question.opt4+'</div>\
									<div class="col-lg-12" style="margin-top:10px;">\
										<p class="optionerror" style="color:red;"></p>\
									</div>\
								</div>\
							</div>\
						</div>';
						if(data.question_no == parseInt(data.ques_count)){
							QUESTION_HTML += '<button class="btn btn-sm btn-success submitquiz" style="float:right;">Funish Quiz</button>';
						}else{
							QUESTION_HTML += '<button class="btn btn-sm btn-success getnextquestion" style="float:right;">Next</button>';
						}
						$("#takeQuiz").html(QUESTION_HTML);
					}
				}
			});
		}			
 	}
 
	function submitform(i) {
		//alert("czxczxc"+i);
		var spikelet_id= document.getElementById('spikelet_id'+i).value;
		var subject_id= document.getElementById('subject_id'+i).value;
		var topics= document.getElementById('topics'+i).value;
		
		//alert("<?php echo site_url();?>index.php/Student_Controller/getQuizs?spikelet_id="+spikelet_id+"&subject_id="+subject_id+"&topics="+topics);
	    window.location = "<?php echo site_url();?>index.php/Student_Controller/getQuizs?spikelet_id="+spikelet_id+"&subject_id="+subject_id+"&topics="+topics;
	}
</script>


</body>
</html>