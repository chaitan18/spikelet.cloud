<div class="content-wrapper">
  <section class="content-header">
    <h1><small></small></h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li><a href="#">Masters</a></li>
      <li class="active">Add Sub Topic</li>
    </ol>
  </section>

  <section class="content">
    <div class="col-md-12 ajax_message"></div>
    <div class="col-md-12">
      <div class="box box-warning">
        <div class="box-header with-border">
          <h3 class="box-title">Add Sub Topic</h3>
        </div>
        <div class="box-body">
          <form role="form" id="add_subtopic">
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
              <label>Select Subject</label>
              <select class="form-control subject" name="subject">
                <option value="">Select Subject</option>
              </select>
              <p class="error" style="color: red;"></p>
            </div>

            <div class="form-group">
              <label>Sub Topic Name</label>
              <input type="text" name="subtopic_name" class="form-control" placeholder="Enter ...">
              <p class="error" style="color: red;"></p>
            </div>

            <div class="form-group">
              <label>Sub Topic Alias Name</label>
              <input type="text" name="subtopic_aliasname" class="form-control" placeholder="Enter ...">
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
    $('select[name="topic"]').on('change', function(){
      var value = $(this).val();
      $.ajax({
        url : "<?php echo base_url(); ?>admin/get_subjectbytopic",
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
            var subject_HTML = '<option value="">Select Subject</option>';
            data.subject.forEach(function(subject, index){
              subject_HTML += '<option value="'+subject.subject_id+'">'+subject.subject_name+'</option>'
            });
            $('.subject').html(subject_HTML);
          }
        }
      });      
    });

    $('.addsubtopic').on('click', function(){
      $('.error').html('');
      $(this).prop('disabled', true);
      var subtopic_name = $('input[name="subtopic_name"]').val();
      var subtopic_aliasname = $('input[name="subtopic_aliasname"]').val();
      var topic = $('select[name="topic"]').val();
      var subject = $('select[name="subject"]').val();

      var error = 0;
      if($.trim(subtopic_name).length == 0){
        $('input[name="subtopic_name"]').closest('.form-group').find('.error').html('This field is mandatory');
        error++;
      }else{
        if(subtopic_name.length > 50){
          $('input[name="subtopic_name"]').closest('.form-group').find('.error').html('This field can contain maximum of 50 characters');
          error++;
        }

        if(subtopic_name.length < 2){
          $('input[name="subtopic_name"]').closest('.form-group').find('.error').html('This field can contain minimum of 2 characters');
          error++;
        }
      }

      if($.trim(subtopic_aliasname).length == 0){
        $('input[name="subtopic_aliasname"]').closest('.form-group').find('.error').html('This field is mandatory');
        error++;
      }else{
        if(subtopic_aliasname.length > 50){
          $('input[name="subtopic_aliasname"]').closest('.form-group').find('.error').html('This field can contain maximum of 50 characters');
          error++;
        }

        if(subtopic_aliasname.length < 2){
          $('input[name="subtopic_aliasname"]').closest('.form-group').find('.error').html('This field can contain minimum of 2 characters');
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

      if(error == 0){
        $.ajax({
          url : "<?php echo base_url(); ?>admin/insert_subtopic",
          type : "post",
          dataType : "json",
          data : {
            subtopic_name : subtopic_name,
            subtopic_aliasname : subtopic_aliasname,
            topic : topic,
            subject : subject
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
              $('#add_subtopic')[0].reset();
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