<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Spikelet Page
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Quizs</a></li>
        <li class="active">Spikelet Page</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="col-md-6">
        <div class="box box-widget widget-user-2">
          <div class="widget-user-header bg-blue">
            <h3 class="widget-user-username"><?php echo $spikeletName;?></h3>
           <!-- <h5 class="widget-user-desc">Lead Developer</h5>-->
          </div>
          <div class="box-footer no-padding">
            <ul class="nav nav-stacked">
              <li>
                <table class="table table-hover table-striped">
                  <thead>
                    <tr>
                      <th style="vertical-align: middle; text-align: center;">Topics</th>
                      <th style="vertical-align: middle; text-align: center;">No.of Quizs</th>
                      <th style="vertical-align: middle; text-align: center;">No.of Quizs remaining</th>
                    </tr>
                  </thead>
                  <tbody>
                    <?php foreach($quizdata as $quiz){ ?>
                      <tr>
                        <td style="vertical-align: middle; text-align: center;"><?php echo $quiz['topic_name'];?></td>
                        <td style="vertical-align: middle; text-align: center;"><?php echo $quiz['no_of_quizs'];?></td>
                        <td style="vertical-align: middle; text-align: center;"><?php echo $quiz['no_of_quizs'];?></td>
                      </tr>
                    <?php } ?>
                  </tbody>
                </table>
                <input type="hidden" name="subject_id" id="subject_id" value="<?php echo $subject_id ;?>"/>
                <input type="hidden" name="classid" id="classid" value="<?php echo $class_id;?>"/>
                <input type="hidden" name="spikelet_id" id="spikelet_id" value="<?php echo $spikelet_id;?>"/>
              </li>
              <li>
                <div style="padding: 10px;">
                  <label>Topic</label>
                  <select class="selectpicker form-control" id="topicsid" onchange="getsubtopics()">
                    <option value="">Select Topic</option>
                    <?php foreach($topicslist as $topics){ ?>
                      <option value="<?php echo $topics['topic_id']; ?>"><?php echo $topics['topic_name']; ?></option>
                    <?php } ?>
                  </select>
                  <p class="error topicsiderror" style="color: red;"></p>
                </div>
              </li>
              <li>
                <div style="padding: 10px;">
                  <label>Sub Topic</label>
                  <select class="selectpicker form-control" id="subtopicid" onchange="getQuiz();">
                    <option value="">Select sub Topic</option>
                  </select>
                  <p class="error subtopiciderror" style="color: red;"></p>
                </div>
              </li>
              <li>
                <div style="padding: 10px;">
                  <label>Quiz</label>
                  <select class="selectpicker form-control" id="quizid">
                    <option value="">Select Quiz</option>
                  </select>
                  <p class="error quiziderror" style="color: red;"></p>
                </div>
              </li>
              <li>
                <div style="padding: 10px;">
                  <button type="button" class="btn btn-success btn-block" onclick="takeQuiz();" style="margin-top: 10px;">Take Test</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-6" id="takeQuiz">
        
      </div>     
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->

  <script>
  $(function(){
    $('body').on('click', '.getnextquestion', function(){
      var student_id = <?php echo $this->session->userdata('login_user_id'); ?>;
      var qz_id = $("#quizid").val();
      var question_id = $('input[name="question_id"]').val();
      var opted_option = $('input[name="options"]:checked').val();
      if(typeof opted_option == 'undefined'){
        $('.optionerror').html('Please select any of option to get next question');
      }else{
        $.ajax({
          url   :   "<?php echo base_url();?>student/submitanswer",
          type  : 'POST',
          dataType: 'json',
          data  :   { 
            'student_id' : student_id,
            'qz_id' : qz_id,
            'question_id' : question_id,
            'opted_option' : opted_option
          },
          error:function() {
            $("#takeQuiz").html('Some thing went wrong please try after some time');
          },
          success : function(data) {
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
      var student_id = <?php echo $this->session->userdata('login_user_id'); ?>;
      var qz_id = $("#quizid").val();
      var question_id = $('input[name="question_id"]').val();
      var opted_option = $('input[name="options"]:checked').val();
      if(opted_option == '' || opted_option == null){
        $('.optionerror').html('Please select any of option to get next question');
      }else{
        $.ajax({
          url   :   "<?php echo base_url();?>student/submitquiz",
          type  : 'POST',
          dataType: 'json',
          data  :   { 
            'student_id' : student_id,
            'qz_id' : qz_id,
            'question_id' : question_id,
            'opted_option' : opted_option
          },
          error:function() {
            $("#takeQuiz").html('Some thing went wrong please try after some time');
          },
          success : function(data) {
            if(data.status == 1){
              var status_message = '<div class = "panel panel-primary">\
                <div class = "panel-heading">\
                  <h3 class = "panel-title">Exam Status</h3>\
                </div>\
                <div class = "panel-body">\
                  <div class="row">\
                    <div class="col-lg-12">\
                      <h4>'+data.msg+'</h4>\
                      <a href="javascript:void(0);"  class="btn btn-success btn-block" id="generate_id" onclick="generateRoport('+quiz_id+');">Generate Report</a>\
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
      }
    });
  });

  function getsubtopics() {
    var topic_id = $("#topicsid").val();
    var subject = $("#subject_id").val();
    var classid = $("#classid").val();
    var spikelet_id = $("#spikelet_id").val();    
    $.ajax({
      url   :   "<?php echo base_url();?>student/getSubTopics/",
      type  : 'POST',     
      dataType: 'json',
      data  :   { 
        'classid' : classid,
        'subject_id' : subject,
        'topic_id' : topic_id,    
        'spikelet_id' : spikelet_id   
      },
      error:function() {
        alert('No sub_topics Found');
        sel.append('<option value="">--Select--</option>');
      },            
      success : function(data) {
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
      url   :   "<?php echo base_url();?>student/getQuiz/",
      type  : 'POST',
      dataType: 'json',
      data  :   { 
        'classid' : classid,
        'subject_id' : subject,
        'topic_id' : topic_id,    
        'subtopic_id' : subtopicid,
        'spikelet_id' : spikelet_id   
      },
      error : function() {
        alert('No sub_topics Found');
        sel.append('<option value="">--Select--</option>');
      },      
      success : function(data) {
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
        url   :   "<?php echo base_url();?>student/takeQuiz/",
        type  : 'POST',
        dataType: 'json',
        data  :   { 
          'classid' : classid,
          'subject_id' : subject,
          'topic_id' : topic_id,
          'subtopic_id' : subtopicid,
          'spikelet_id' : spikelet_id ,
          'quiz_id'   : quiz_id
        },
        error : function() {
          $("#takeQuiz").html('Some thing went wrong please try again after some time');
        },
        success : function(data) {
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
                      <a href="javascript:void(0);"  class="btn btn-success btn-block" id="generate_id" onclick="generateRoport('+quiz_id+');">Generate Report</a>\
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
                </div>';
                QUESTION_HTML += '<div class="row" style="margin-top:10px;">\
                  <div class="col-lg-12">\
                    <p style="color:#c1c1c1;">Hint : '+data.question.hint+'</p>\
                  </div>\
                </div>';
                QUESTION_HTML += '<div class="row" style="margin-top:10px;">\
                  <div class="col-lg-6"><input type="radio" name="options" value="A" /> '+data.question.opt1+'</div>\
                  <div class="col-lg-6"><input type="radio" name="options" value="B" /> '+data.question.opt2+'</div>\
                  <div class="col-lg-6"><input type="radio" name="options" value="C" /> '+data.question.opt3+'</div>\
                  <div class="col-lg-6"><input type="radio" name="options" value="D" /> '+data.question.opt4+'</div>\
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

  function generateRoport(id) {
    var quiz_id = id;    
    $.ajax({
      url   :   "<?php echo base_url();?>student/getQuizReport/",
      type  : 'POST',
      dataType: 'json',
      data  :   { 
        'quiz_id' : quiz_id       
      },
      error : function() {
        alert('No sub_topics Found');
        sel.append('Something went worng');
      },      
      success : function(data) {
        var QUIZ_HTML = '<div class = "panel panel-primary">\
          <div class = "panel-heading">\
            <h3 class = "panel-title">Exam Report</h3>\
          </div>\
          <div class = "panel-body">\
            <div class="row">';
              data.forEach(function(option, index){
                QUIZ_HTML += ' <div class="col-lg-12">\
                  <h4>No of Questions Attemped :: '+option.questions_attempted+'</h4>\
                  <h4>No of Questions Answered Correct :: '+option.answer_status+'</h4>\
                  <h4>No of Questions Answered Wrong :: '+option.worng_answer_status+'</h4>\
                </div>';
              });
            QUIZ_HTML += '  </div>\
          </div>\
        </div>';
        $("#takeQuiz").html(QUIZ_HTML);
      }     
    });
  }
 
  function submitform(i) {
    //alert("czxczxc"+i);
    var spikelet_id= document.getElementById('spikelet_id'+i).value;
    var subject_id= document.getElementById('subject_id'+i).value;
    var topics= document.getElementById('topics'+i).value;
    
    //alert("<?php echo site_url();?>index.php/student/getQuizs?spikelet_id="+spikelet_id+"&subject_id="+subject_id+"&topics="+topics);
      window.location = "<?php echo site_url();?>student/getQuizs/"+spikelet_id+"/"+subject_id+"/"+topics;
  }
</script>