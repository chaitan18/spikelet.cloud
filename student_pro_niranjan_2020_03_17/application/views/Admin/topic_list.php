<div class="content-wrapper">
  <section class="content-header">
    <h1><small></small></h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li><a href="#">Masters</a></li>
      <li class="active">Topic List</li>
    </ol>
  </section>

  <section class="content">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Topic List</h3>
        </div>
        <!-- /.box-header -->
        <div class="box-body table-responsive no-padding">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Topic Name</th>
                <th>Subject Name</th>
                <th>Added Date</th>
              </tr>
            </thead>
            <tbody>
              <?php if(count($topic_list) > 0){
                foreach ($topic_list as $key => $value) { ?>
                  <tr>
                    <td><?php echo $key+1; ?></td>
                    <td><?php echo $value['topic_name']; ?></td>
                    <td><?php echo $value['subject_name']; ?></td>
                    <td><?php echo $value['added_datetime']; ?></td>
                  </tr>
                <?php } 
              }else{ ?>
                <tr><td colspan="4">No topic found</td></tr>
              <?php } ?>
            </tbody>
          </table>
        </div>
      </div>
      <a href="<?php echo base_url(); ?>admin/add_topic" class="btn btn-sm btn-primary" style="float: right;">Add Topic</a>
    </div>    
  </section>
</div>
