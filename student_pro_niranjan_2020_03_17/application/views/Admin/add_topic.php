<div class="content-wrapper">
  <section class="content-header">
    <h1><small></small></h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li><a href="#">Masters</a></li>
      <li class="active">Add Topic</li>
    </ol>
  </section>

  <section class="content">
    <div class="col-md-12 ajax_message"></div>
    <div class="col-md-12">
      <div class="box box-warning">
        <div class="box-header with-border">
          <h3 class="box-title">Add Topic</h3>
        </div>
        <div class="box-body">
          <form role="form" id="add_topic">
            <div class="form-group">
              <label>Topic Name</label>
              <input type="text" name="topic_name" class="form-control" placeholder="Enter ...">
              <p class="error" style="color: red;"></p>
            </div>

            <div class="form-group">
              <label>Topic Alias Name</label>
              <input type="text" name="topic_aliasname" class="form-control" placeholder="Enter ...">
              <p class="error" style="color: red;"></p>
            </div>

            <div class="form-group">
              <label>Select Subject</label>
              <select class="form-control" name="subject">
                <option value="">Select Subject</option>
                <?php foreach ($subject_list as $key => $subject) { ?>
                  <option value="<?php echo $subject['subject_id']; ?>"><?php echo $subject['subject_name'] ?></option>
                <?php } ?>
              </select>
              <p class="error" style="color: red;"></p>
            </div>
          </form>
        </div>
        <div class="box-footer">
          <button class="btn btn-primary addsubject" style="float: right;">Submit</button>
        </div>
      </div>
    </div>     
  </section>
</div>

<script type="text/javascript">
  $(function(){
    $('.addsubject').on('click', function(){
      $('.error').html('');
      $(this).prop('disabled', true);
      var topic_name = $('input[name="topic_name"]').val();
      var topic_aliasname = $('input[name="topic_aliasname"]').val();
      var subject = $('select[name="subject"]').val();

      var error = 0;
      if($.trim(topic_name).length == 0){
        $('input[name="topic_name"]').closest('.form-group').find('.error').html('This field is mandatory');
        error++;
      }else{
        if(topic_name.length > 50){
          $('input[name="topic_name"]').closest('.form-group').find('.error').html('This field can contain maximum of 50 characters');
          error++;
        }

        if(topic_name.length < 2){
          $('input[name="topic_name"]').closest('.form-group').find('.error').html('This field can contain minimum of 2 characters');
          error++;
        }
      }

      if($.trim(topic_aliasname).length == 0){
        $('input[name="topic_aliasname"]').closest('.form-group').find('.error').html('This field is mandatory');
        error++;
      }else{
        if(topic_aliasname.length > 50){
          $('input[name="topic_aliasname"]').closest('.form-group').find('.error').html('This field can contain maximum of 50 characters');
          error++;
        }

        if(topic_aliasname.length < 2){
          $('input[name="topic_aliasname"]').closest('.form-group').find('.error').html('This field can contain minimum of 2 characters');
          error++;
        }
      }

      if($.trim(subject).length == 0){
        $('select[name="subject"]').closest('.form-group').find('.error').html('This field is mandatory');
        error++;
      }

      if(error == 0){
        $.ajax({
          url : "<?php echo base_url(); ?>admin/insert_topic",
          type : "post",
          dataType : "json",
          data : {
            topic_name : topic_name,
            topic_aliasname : topic_aliasname,
            subject : subject
          },
          error : function(){
            $('.ajax_message').html('Some thing went wrong please try after some time');
            $(this).prop('disabled', false);
          },
          success : function(data){
            if(data.status == 0){
              $('.ajax_message').html('<p style="color:red;">'+data.message+'</p>');
            }else{
              $('.ajax_message').html('<p style="color:green;">'+data.message+'</p>');
              $('#add_topic')[0].reset();
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