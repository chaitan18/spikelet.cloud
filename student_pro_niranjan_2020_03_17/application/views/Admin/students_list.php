<div class="modal fade" id="myModal" role="dialog">
  <div class="modal-dialog">
    <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal">&times;</button>
            <h4 class="modal-title">Edit details</h4>
        </div>
        
        <div class="modal-body">
          
        </div>
        <div class="modal-load" style="text-align: center;"></div>
        <div class="modal-footer">
            
        </div>
      </div>
  </div>
</div>
<div class="content-wrapper">
  <section class="content-header">
    <h1><small></small></h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li class="active">Spinklet List</li>
    </ol>
  </section>

  <section class="content">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Spinklet List</h3>

          <!-- <div class="box-tools">
            <div class="input-group input-group-sm" style="width: 150px;">
              <input type="text" name="table_search" class="form-control pull-right" placeholder="Search">

              <div class="input-group-btn">
                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
              </div>
            </div>
          </div> -->
        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive no-padding">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Full Name</th>
                <th>Username</th>
                <th>Emailid</th>
                <th>Gender</th>
                <th>Age</th>
                <th>Mobile Number</th>
                <th>Address</th>
                <th>Added Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <?php if(count($students_list) > 0){
                foreach ($students_list as $key => $value) { ?>
                  <tr>
                    <td><?php echo $key+1; ?></td>
                    <td><?php echo $value['full_name']; ?></td>
                    <td><?php echo $value['username']; ?></td>
                    <td><?php echo $value['email']; ?></td>
                    <td><?php echo $value['gender']; ?></td>
                    <td><?php echo $value['age']; ?></td>
                    <td><?php echo $value['phone']; ?></td>
                    <td><?php echo $value['address']; ?></td>
                    <td><?php echo $value['date_added']; ?></td>
                    <!-- <td><?php if($value['userstatus'] == 1){ ?>
                      <button class="btn btn-xs btn-success">Active</button>
                      <span data-toggle="modal" data-target="#myModal">
                        <a href="javascript:void(0);" class="edituser" style="border-radius: 10px; margin-left: 10px;" data-toggle="tooltip" data-placement="top" title="Edit" data-userid = "<?php echo $value['user_id']; ?>"><i class="fa fa-edit" style="font-size:18px;"></i></a>
                      </span>
                    <?php }else{ ?>
                      <button class="btn btn-xs btn-danger">In Active</button>
                      <span data-toggle="modal" data-target="#myModal">
                        <a href="javascript:void(0);" class="edituser" style="border-radius: 10px; margin-left: 10px;" data-toggle="tooltip" data-placement="top" title="Edit" data-userid = "<?php echo $value['user_id']; ?>"><i class="fa fa-edit" style="font-size:18px;"></i></a>
                      </span>
                    <?php } ?></td> -->
                  </tr>
                <?php }
              }else{ ?>
                <tr><td colspan="11">No Spinklet found</td></tr>
              <?php } ?>
            </tbody>
          </table>
        </div>
      </div>
      <a href="<?php echo base_url(); ?>admin/add_student" class="btn btn-sm btn-primary" style="float: right;">Register Student</a>
    </div>    
  </section>
</div>

<script type="text/javascript">
  $(function(){
    $('.edituser').on('click', function(){
      var user_id = $(this).data('userid');

      $.ajax({
        url : "<?php echo base_url(); ?>superadmin/get_userdetails",
        dataType : "json",
        type : "post",
        data : {
          user_id : user_id
        },
        error : function(){
          $('.modal-body').html('<p style="color:red;">Something went wrong please try after some time.</p>');
        },
        success : function(response){
          if(response.status == 0){
            $('.modal-body').html('<p style="color:red;">'+response.msg+'</p>');
          }else{
            var HTML_DATA = '<form>\
              <div class="row">\
                <div class="col-xs-12">\
                  <input name="user_id" type="hidden" class="form-control" value="'+response.get_user_data.user_id+'">\
                </div>\
                <div class="col-xs-12">\
                  <label>Full Name</label>\
                  <div class="form-control">'+response.get_user_data.full_name+'</div>\
                </div>\
                <div class="col-xs-12" style="margin-top:10px;">\
                  <label>Spinklet Name</label>\
                  <div class="form-control">'+response.get_user_data.spikelet_name+'</div>\
                </div>\
                <div class="col-xs-12" style="margin-top:10px;">\
                  <label>Current Status</label>\
                  <select class="form-control" name="userstatus">';
                    if(response.get_user_data.status == 1){
                      activestatus = "selected";
                    }else{
                      activestatus = "";
                    }

                    if(response.get_user_data.status == 0){
                      inactivestatus = "selected";
                    }else{
                      inactivestatus = "";
                    }
                    HTML_DATA += '<option value="active" '+activestatus+'>Active</option>\
                    <option value="inactive" '+inactivestatus+'>Inactive</option>\
                  </select>\
                </div>\
              </div>\
            </form>';

            $('.modal-body').html(HTML_DATA);

            var FOOTER_HTML = '<div class="row">\
              <div class="col-xs-12">\
                <button class="btn btn-sm btn-success changeuserstatus">Submit</button>\
              </div>\
            </div>';

            $('.modal-footer').html(FOOTER_HTML);
          }
        }
      });
    });

    $('body').on('click', '.changeuserstatus', function(){
      var user_id = $('input[name="user_id"]').val();
      var user_status = $('select[name="userstatus"] :selected').val();

      $.ajax({
        url : "<?php echo base_url(); ?>superadmin/update_userstatus",
        dataType : "json",
        type : "post",
        data : {
          user_id : user_id,
          user_status : user_status
        },
        error : function(){
          $('.modal-body').html('<p style="color:red;">Something went wrong please try after some time.</p>');
        },
        success : function(response){
          if(response.status == 0){
            $('.modal-body').html('<p style="color:red;">'+response.msg+'</p>');
          }else{
            $('.modal-body').html('<p style="color:green;">'+response.msg+'</p>');
            $('.modal-footer').html('');
          }
        }
      });
    });

    $('#myModal').on('hidden.bs.modal', function () {
      location.reload();
    });
  });
</script>
