<div class="content-wrapper">
  <section class="content-header">
    <h1><small></small></h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li><a href="#">Masters</a></li>
      <li class="active">Quiz List</li>
    </ol>
  </section>

  <section class="content">
    <div class="col-xs-12">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Quiz List</h3>

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
                <th>Quiz Name</th>
                <th>Subject Name</th>
                <th>Class</th>
                <th>Topic Name</th>
                <th>Sub Topic Name</th>
                <th>Number of questions</th>
                <th>Added Date</th>
              </tr>
            </thead>
            <tbody>
              <?php if(count($quiz_data) > 0){
                foreach ($quiz_data as $key => $value) { ?>
                  <tr>
                    <td><?php echo $key+1; ?></td>
                    <td><?php echo $value['quiz_name']; ?></td>
                    <td><?php echo $value['subject_name']; ?></td>
                    <td><?php echo $value['class_name']; ?></td>
                    <td><?php echo $value['topic_name']; ?></td>
                    <td><?php echo $value['sub_topic_name']; ?></td>
                    <td><?php echo $value['no_of_questions']; ?></td>
                    <td><?php echo $value['added_datetime']; ?></td>
                  </tr>
                <?php }
              }else{ ?>
                <tr><td colspan="8">No quiz found</td></tr>
              <?php } ?>
            </tbody>
          </table>
        </div>
      </div>
      <a href="<?php echo base_url(); ?>admin/add_quiz" class="btn btn-sm btn-primary" style="float: right;">Add Quiz</a>
    </div>    
  </section>
</div>
