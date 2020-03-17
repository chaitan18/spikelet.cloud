<div class="content-wrapper">
  <section class="content-header">
    <h1><small></small></h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li><a href="#">Masters</a></li>
      <li class="active">Subject List</li>
    </ol>
  </section>

  <section class="content">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Subject List</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive no-padding">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Subject Name</th>
                <th>Added Date</th>
              </tr>
            </thead>
            <tbody>
              <?php if(count($subject_list) > 0){
                foreach ($subject_list as $key => $value) { ?>
                  <tr>
                    <td><?php echo $key+1; ?></td>
                    <td><?php echo $value['subject_name']; ?></td>
                    <td><?php echo $value['added_datetime']; ?></td>
                  </tr>
                <?php } 
              }else{ ?>
                <tr><td colspan="3"> No subjects found</td></tr>
              <?php } ?>
            </tbody>
          </table>
        </div>
      </div>
      <a href="<?php echo base_url(); ?>admin/add_subject" class="btn btn-sm btn-primary" style="float: right;">Add Subject</a>
    </div>    
  </section>
</div>
