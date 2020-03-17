<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Spinklet Page
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Examples</a></li>
        <li class="active">Spinklet Page</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
      <?php $j=1; 
      foreach($dataarray as $data){ 
        $topics=$data['topics']; ?>
        <div class="col-md-4">
          <div class="box box-widget widget-user-2">
            <div class="widget-user-header bg-blue">
              <h3 class="widget-user-username"><?php echo $data['spikelet_name']."-"; ?></h3>
              <h5 class="widget-user-desc"><?php echo $data['subject_name']; ?></h5>
            </div>
            <div class="box-footer no-padding">
              <ul class="nav nav-stacked">
                <input type="hidden" name="spikelet_id<?php echo $j;?>" id="spikelet_id<?php echo $j;?>" value="<?php echo $data['spikelet_id'];?>" />
                <input type="hidden" name="subject_id<?php echo $j;?>" id="subject_id<?php echo $j;?>" value="<?php echo $data['subject_id'];?>" />
                <li>
                  <div style="padding: 10px;">
                    <select  name='topics<?php echo $j;?>' class="form-control" id='topics<?php echo $j;?>' >
                      <option value="" selected='select' >Select Topic</option>
                      <?php foreach($topics as $topic){
                        echo "<option value='".$topic['topic_id']."' >".$topic['topic_name']."</option>";
                      } ?>
                    </select>
                    <p class="error topicerror<?php echo $j; ?>" style="color: red;"></p>
                  </div>
                </li>
                <li><a href="#">Quiz Taken <span class="pull-right badge bg-aqua">5</span></a></li>
                <li><a href="#">Quiz Remaining <span class="pull-right badge bg-green">12</span></a></li>
                <li>
                  <div style="padding: 10px;">
                    <button class="btn btn-block btn-success" style="vertical-align:middle" onClick="submitform('<?php echo $j;?>')"><span>Spikelet Details </span></button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <?php $j++;
      } ?>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
<script>
  function submitform(i) {
    $('.error').html('');
    var spikelet_id= document.getElementById('spikelet_id'+i).value;
    var subject_id= document.getElementById('subject_id'+i).value;
    var topics= document.getElementById('topics'+i).value;
    if(topics == ''){
      $('.topicerror'+i).html('Select topic');
    }else{
      window.location = "<?php echo site_url();?>Student/getQuizs/"+spikelet_id+"/"+subject_id+"/"+topics;
    }  
  }
</script>