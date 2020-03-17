<div class="content-wrapper">
  <section class="content-header">
    <h1><small></small></h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li><a href="#">Masters</a></li>
      <li class="active">Add Quiz</li>
    </ol>
  </section>

  <section class="content">
    <div class="col-md-12 ajax_message"></div>
    <div class="col-md-12">
      <div class="box box-warning">
        <div class="box-header with-border">
          <h3 class="box-title">Add Quiz</h3>
        </div>
        <div class="box-body">
          <form role="form" id="add_quiz">
            <div class="form-group">
              <label>Select Class</label>
              <select class="form-control" name="class">
                <option value="">Select Class</option>
                <?php foreach ($class_list as $key => $class) { ?>
                  <option value="<?php echo $class['class_id']; ?>"><?php echo $class['class_name'] ?></option>
                <?php } ?>
              </select>
              <p class="error" style="color: red;"></p>
            </div>

            <div class="form-group">
              <label>Select Topic</label>
              <select class="form-control" name="topic">
                <option value="">Select Topic</option>
                <?php foreach ($topic_list as $key => $topic) { ?>
                  <option value="<?php echo $topic['topic_id']; ?>"><?php echo $topic['topic_name'] ?></option>
                <?php } ?>
              </select>
              <p class="error" style="color: red;"></p>
            </div>

            <div class="form-group">
              <label>Select Sub Topic</label>
              <select class="form-control subtopic" name="subtopic">
                <option value="">Select Sub Topic</option>
              </select>
              <p class="error" style="color: red;"></p>
            </div>

            <div class="form-group">
              <label>Select Subject</label>
              <select class="form-control subject" name="subject">
                <option value="">Select Subject</option>
              </select>
              <p class="error" style="color: red;"></p>
            </div>

            <div class="form-group">
              <label>Quiz Name</label>
              <input type="text" name="quizname" class="form-control" placeholder="Enter ...">
              <p class="error" style="color: red;"></p>
            </div>

            <div class="form-group">
              <label>Quiz Alias Name</label>
              <input type="text" name="quiz_aliasname" class="form-control" placeholder="Enter ...">
              <p class="error" style="color: red;"></p>
            </div>
          </form>
        </div>
        <div class="box-footer">
          <button class="btn btn-primary addsubtopic" style="float: right;">Submit</button>
        </div>
      </div>
    </div>     
  </section>
</div>

<script type="text/javascript">
  $(function(){
    $('select[name="subtopic"]').on('change', function(){
      var value = $(this).val();
      var topic = $('select[name="topic"]').val();
      $.ajax({
        url : "<?php echo base_url(); ?>admin/get_subjectbytopicandsubtopic",
        type : "post",
        dataType : "json",
        data : {
          topic : topic,
          subtopic : value
        },
        error : function(){
          $('.ajax_message').html('<p style="color:red;">Some thing went wrong please try after some time</p>');
        },
        success : function(data){
          if(data.status == 0){
            $('.ajax_message').html('<p style="color:red;">'+data.message+'</p>');
          }else{
            var subject_HTML = '<option value="">Select Subject</option>';
            data.subject.forEach(function(subject, index){
              subject_HTML += '<option value="'+subject.subject_id+'">'+subject.subject_name+'</option>'
            });
            $('.subject').html(subject_HTML);
          }
        }
      });      
    });

    $('select[name="topic"]').on('change', function(){
      var value = $(this).val();
      $.ajax({
        url : "<?php echo base_url(); ?>admin/get_subtopicbytopic",
        type : "post",
        dataType : "json",
        data : {
          topic : value
        },
        error : function(){
          $('.ajax_message').html('<p style="color:red;">Some thing went wrong please try after some time</p>');
        },
        success : function(data){
          if(data.status == 0){
            $('.ajax_message').html('<p style="color:red;">'+data.message+'</p>');
          }else{
            var subject_HTML = '<option value="">Select Sub Topic</option>';
            data.subtopic.forEach(function(subtopic, index){
              subject_HTML += '<option value="'+subtopic.sub_topic_id+'">'+subtopic.sub_topic_name+'</option>';
            });
            $('.subtopic').html(subject_HTML);
          }
        }
      });      
    });

    $('.addsubtopic').on('click', function(){
      $('.error').html('');
      $(this).prop('disabled', true);
      var quizname = $('input[name="quizname"]').val();
      var quiz_aliasname = $('input[name="quiz_aliasname"]').val();
      var topic = $('select[name="topic"]').val();
      var subtopic = $('select[name="subtopic"]').val();
      var subject = $('select[name="subject"]').val();
      var class_val = $('select[name="class"]').val();

      var error = 0;
      if($.trim(quizname).length == 0){
        $('input[name="quizname"]').closest('.form-group').find('.error').html('This field is mandatory');
        error++;
      }else{
        if(quizname.length > 50){
          $('input[name="quizname"]').closest('.form-group').find('.error').html('This field can contain maximum of 50 characters');
          error++;
        }

        if(quizname.length < 2){
          $('input[name="quizname"]').closest('.form-group').find('.error').html('This field can contain minimum of 2 characters');
          error++;
        }
      }

      if($.trim(quiz_aliasname).length == 0){
        $('input[name="quiz_aliasname"]').closest('.form-group').find('.error').html('This field is mandatory');
        error++;
      }else{
        if(quiz_aliasname.length > 50){
          $('input[name="quiz_aliasname"]').closest('.form-group').find('.error').html('This field can contain maximum of 50 characters');
          error++;
        }

        if(quiz_aliasname.length < 2){
          $('input[name="quiz_aliasname"]').closest('.form-group').find('.error').html('This field can contain minimum of 2 characters');
          error++;
        }
      }

      if($.trim(topic).length == 0){
        $('select[name="topic"]').closest('.form-group').find('.error').html('This field is mandatory');
        error++;
      }

      if($.trim(subject).length == 0){
        $('select[name="subject"]').closest('.form-group').find('.error').html('This field is mandatory');
        error++;
      }

      if($.trim(subtopic).length == 0){
        $('select[name="subtopic"]').closest('.form-group').find('.error').html('This field is mandatory');
        error++;
      }

      if($.trim(class_val).length == 0){
        $('select[name="class"]').closest('.form-group').find('.error').html('This field is mandatory');
        error++;
      }

      if(error == 0){
        $.ajax({
          url : "<?php echo base_url(); ?>admin/insert_quiz",
          type : "post",
          dataType : "json",
          data : {
            quizname : quizname,
            quiz_aliasname : quiz_aliasname,
            topic : topic,
            subtopic : subtopic,
            subject : subject,
            class : class_val
          },
          error : function(){
            $('.ajax_message').html('<p style="color:red;">Some thing went wrong please try after some time</p>');
            $(this).prop('disabled', false);
          },
          success : function(data){
            if(data.status == 0){
              $('.ajax_message').html('<p style="color:red;">'+data.message+'</p>');
            }else{
              $('.ajax_message').html('<p style="color:green;">'+data.message+'</p>');
              $('#add_quiz')[0].reset();
            }
            $(this).prop('disabled', false);
          }
        });
      }else{
        $(this).prop('disabled', false);
      }
    });
  });
</script>