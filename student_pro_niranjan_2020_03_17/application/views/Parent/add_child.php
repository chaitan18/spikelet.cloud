<div class="content-wrapper">
  <section class="content-header">
    <h1><small></small></h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="active">Add Child</li>
    </ol>
  </section>

  <section class="content">
    <div class="col-md-12 ajax_message"></div>
    <div class="col-md-12">
      <div class="box box-warning">
        <div class="box-header with-border">
          <h3 class="box-title">Add Child</h3>
        </div>
        <div class="box-body">
          <form role="form" id="add_child">
            <div class="row">
              <div class="col-md-4">
                <div class="form-group">
                  <label>Full Name</label>
                  <input type="text" name="full_name" class="form-control" placeholder="Enter Full name" data-fieldtype = "text" data-maxlength = "100">
                  <p class="error" style="color: red;"></p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label>Username</label>
                  <input type="text" name="username" class="form-control" placeholder="Enter Username" data-fieldtype = "text" data-maxlength = "15">
                  <p class="error" style="color: red;"></p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label>Emailid</label>
                  <input type="text" name="email" class="form-control" placeholder="Enter Emailid" data-fieldtype = "email" data-maxlength = "100">
                  <p class="error" style="color: red;"></p>
                </div>
              </div>

              <div class="col-md-4" style="margin-bottom: -6px;">
                <div class="form-group">
                  <label>Gender</label>
                  <div class="row">
                    <div class="col-md-4">
                      <div class="radio">
                        <label>
                          <input type="radio" name="gender"  value="Male">
                          Male
                        </label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="radio">
                        <label>
                          <input type="radio" name="gender" value="Female">
                          Female
                        </label>
                      </div>
                    </div>
                    <div class="col-md-4">
                      <div class="radio">
                        <label>
                          <input type="radio" name="gender" value="Other">
                          Other
                        </label>
                      </div>
                    </div>
                  </div>
                  <p class="error" style="color: red;"></p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label>Age</label>
                  <input type="text" name="age" class="form-control" placeholder="Enter Age" data-fieldtype = "number" data-maxlength = "3">
                  <p class="error" style="color: red;"></p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label>Mobile Number</label>
                  <input type="text" name="phone" class="form-control" placeholder="Enter Mobile Number" data-fieldtype = "number" data-maxlength = "15">
                  <p class="error" style="color: red;"></p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label>Address</label>
                  <input type="text" name="address" class="form-control" placeholder="Enter Address" data-fieldtype = "text" data-maxlength = "200">
                  <p class="error" style="color: red;"></p>
                </div>
              </div>

              <div class="col-md-4">
                <div class="form-group">
                  <label>Select Class</label>
                  <select class="form-control" name="class">
                    <option value="">Select Class</option>
                    <?php foreach ($class_list as $key => $class) { ?>
                      <option value="<?php echo $class['class_id'] ?>"><?php echo $class['class_name']; ?></option>
                    <?php } ?>
                  </select>
                  <p class="error" style="color: red;"></p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="box-footer">
          <button class="btn btn-primary addchild" style="float: right;">Submit</button>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <a href="<?php echo base_url(); ?>admin/students_list" class="btn btn-sm btn-primary" style="float: right;">Spinklet List</a>
    </div>  
  </section>
</div>

<script type="text/javascript">
  $(function(){
    $('.addchild').on('click', function(){
      var error = 0;
      $('.error').html('');
      $('.addchild').prop('disabled', true);
      $('input[type=text]', '#add_child').each(function() {
        var fieldtype = $(this).data("fieldtype");
        var maxvalue = $(this).data("maxlength");
        
        if($.trim($(this).val()).length === 0){
          $(this).closest('.form-group').find('.error').html('This field is required');
          error = error + 1;
        }
       
        switch (fieldtype){
          case 'number':
            if($.trim($(this).val()).length > 0){
              if (/^\d+$/.test($(this).val())) {
                $(this).closest('.form-group').find('.error').empty();
              } else {
                $(this).closest('.form-group').find('.error').html('Please provide a valid number.');
                error = error + 1;
              }
            }
            break;

          case 'email' :
            if($.trim($(this).val()).length > 0){
              if( !isValidEmailAddress( $(this).val())) { 
                $(this).closest('.form-group').find('.error').html('Invalid email id');
                error = error + 1; 
              }
            }
        }

        if($.trim($(this).val()).length > maxvalue){
          $(this).closest('.form-group').find('.error').html('Please! Enter upto '+maxvalue+' character/number');
          error = error + 1;
        }
      });

      $('input[type=radio]', '#add_child').each(function() {
        var name = $(this).attr("name");
        if($("input:radio[name="+name+"]:checked").length == 0){
          $(this).closest('.form-group').find('.error').html('This field is required');
          error = error + 1;
        }
      });

      $('select', '#add_child').each(function() {
        if($.trim($(this).val()).length == 0){
          $(this).closest('.form-group').find('.error').html('This field is required');
          error = error + 1;
        }
      });

      if(error == 0){
        var spinkletForm = new FormData($('#add_child')[0]);
        $.ajax({
          url : "<?php echo base_url(); ?>parentcontroller/insert_child",
          type : "post",
          dataType : "json",
          data: spinkletForm,
          processData: false,
          contentType: false,
          error : function(){
            $('.ajax_message').html('<p style="color:red;">Some thing went wrong please try after some time</p>');
            $(this).prop('disabled', false);
          },
          success : function(data){
            if(data.status == 0){
              $('.ajax_message').html('<p style="color:red;">'+data.msg+'</p>');
            }else{
              $('.ajax_message').html('<p style="color:green;">'+data.msg+'</p>');
              $('#add_child')[0].reset();
            }
            $(this).prop('disabled', false);
          }
        });
      }else{
        $('.addchild').prop('disabled', false);
      }
    });
  });

  function isValidEmailAddress(emailAddress) {
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(emailAddress);
  }
</script>