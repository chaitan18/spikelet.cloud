<div class="content-wrapper">
  <section class="content-header">
    <h1><small></small></h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li><a href="#">Masters</a></li>
      <li class="active">Add Subject</li>
    </ol>
  </section>

  <section class="content">
    <div class="col-md-12 ajax_message"></div>
    <div class="col-md-12">
      <div class="box box-warning">
        <div class="box-header with-border">
          <h3 class="box-title">Add Subject</h3>
        </div>
        <div class="box-body">
          <form role="form" id="add_subject">
            <div class="form-group">
              <label>Subject Name</label>
              <input type="text" name="subject_name" class="form-control" placeholder="Enter ...">
              <p class="error" style="color: red;"></p>
            </div>

            <div class="form-group">
              <label>Subject Alias Name</label>
              <input type="text" name="subject_aliasname" class="form-control" placeholder="Enter ...">
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
      var subject_name = $('input[name="subject_name"]').val();
      var subject_aliasname = $('input[name="subject_aliasname"]').val();

      var error = 0;
      if($.trim(subject_name).length == 0){
        $('input[name="subject_name"]').closest('.form-group').find('.error').html('This field is mandatory');
        error++;
      }else{
        if(subject_name.length > 50){
          $('input[name="subject_name"]').closest('.form-group').find('.error').html('This field can contain maximum of 50 characters');
          error++;
        }

        if(subject_name.length < 2){
          $('input[name="subject_name"]').closest('.form-group').find('.error').html('This field can contain minimum of 2 characters');
          error++;
        }
      }

      if($.trim(subject_aliasname).length == 0){
        $('input[name="subject_aliasname"]').closest('.form-group').find('.error').html('This field is mandatory');
        error++;
      }else{
        if(subject_aliasname.length > 50){
          $('input[name="subject_aliasname"]').closest('.form-group').find('.error').html('This field can contain maximum of 50 characters');
          error++;
        }

        if(subject_aliasname.length < 2){
          $('input[name="subject_aliasname"]').closest('.form-group').find('.error').html('This field can contain minimum of 2 characters');
          error++;
        }
      }

      if(error == 0){
        $.ajax({
          url : "<?php echo base_url(); ?>admin/insert_subject",
          type : "post",
          dataType : "json",
          data : {
            subject_name : subject_name,
            subject_aliasname : subject_aliasname
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
              $('#add_subject')[0].reset();
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