<style type="text/css">
  .hidden{
    display: none;
  }
</style>
<div class="content-wrapper">
  <section class="content-header">
    <h1><small></small></h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
      <li><a href="#">Masters</a></li>
      <li class="active">Questions List</li>
    </ol>
  </section>

  <section class="content">
    <div class="col-xs-12">
<?php
  $this->load->helper('form');
  $error = $this->session->flashdata('error');
  if($error)
  {
?>
<div class="alert alert-danger alert-dismissable">
  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
  <?php echo $this->session->flashdata('error'); ?>                    
</div>
<?php } ?>
<?php  
  $success = $this->session->flashdata('success');
  if($success)
  {
?>
<div class="alert alert-success alert-dismissable">
  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
  <?php echo $this->session->flashdata('success'); ?>
</div>
<?php } ?>


</div>
    <div class="col-xs-12">
           
          <form action="<?php echo base_url(); ?>admin/bulk_upload_questions" method="POST" enctype="multipart/form-data">
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
              <div class="input-group">
                <input id="questions_bulk_upload" type="file" name="questions_bulk_upload" class="form-control" placeholder="From Date" autocomplete="off">
                <input  type="hidden" name="select_quiz_hidden" id="select_quiz_hidden">
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-6 col-xs-12 form-group">
              <button type="submit" class="btn btn-md btn-primary btn-block searchList pull-right">Bulk Upload</button> 
            </div>
          </form>
        </div>
    <div class="col-xs-12">
      <?php if(count($quiz_list) > 0){ ?>
        <div class="form-group">
          <label>Select Quiz</label>
          <select class="form-control" name="quiz">
            <option value="">Select Quiz</option>
            <?php foreach ($quiz_list as $key => $value) { ?>
              <option value="<?php echo $value['quiz_id']; ?>"><?php echo $value['quiz_name']; ?></option>
            <?php } ?>
          </select>
        </div>
      <?php }else{ ?>
        <h3>No quiz has been created. Please add quiz to add the question</h3>
      <?php } ?>
    </div>
    <div class="col-xs-12 hidden" id="displayquestions">
      <div class="box">
        <div class="box-header">
          <h3 class="box-title">Quiz List</h3>
        </div>
        <div class="box-body table-responsive no-padding">
          <table class="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Question</th>
                <th>Option 1</th>
                <th>Option 2</th>
                <th>Option 3</th>
                <th>Option 4</th>
                <th>Correct Option</th>
                <th>Correct Answer</th>
                <th>Hint</th>
                <th>Added Date</th>
              </tr>
            </thead>
            <tbody id="questions_list">
             
            </tbody>
          </table>
        </div>
      </div>
      <a href="<?php echo base_url(); ?>admin/add_questions" class="btn btn-sm btn-primary" style="float: right;">Add Question</a>
    </div>    
  </section>
</div>

<script type="text/javascript">
  $(function(){
    $('select[name="quiz"]').on('change', function(){
      var quiz_val = $(this).val();
      $("#select_quiz_hidden").val(quiz_val);
      if(quiz_val != ''){

        $.ajax({
          url : "<?php echo base_url(); ?>admin/getquestion_byquiz",
          dataType : "json",
          type: "post",
          data :{
            quiz_val : quiz_val
          },
          error : function(){
            $('#displayquestions').html('<p style="color:red;">Something went wrong please refresh the page and try again.</p>');
          },
          success : function(response){
            if(response.status == 0){
              $('#displayquestions').html('<p style="color:red;">'+response.message+'</p>');
            }else{
              var QUESTION_HTML = '';
              if(response.question_list.length == 0 || response.question_list.length == ''){
                $('#questions_list').html('<tr><td colspan="10">No Questions found.</td></tr>');
              }else{
                response.question_list.forEach(function(ques, index){
                  QUESTION_HTML += '<tr>\
                    <td>'+(index+1)+'</td>\
                    <td>'+ques.question+'</td>\
                    <td>'+ques.option_1+'</td>\
                    <td>'+ques.option_2+'</td>\
                    <td>'+ques.option_3+'</td>\
                    <td>'+ques.option_4+'</td>\
                    <td>'+ques.correct_option+'</td>\
                    <td>'+ques.answer+'</td>\
                    <td>'+ques.hint+'</td>\
                    <td>'+ques.added_datetime+'</td>\
                  </tr>';
                });
                $('#questions_list').html(QUESTION_HTML);
              }
            }
          }
        });

        if($('#displayquestions').hasClass('hidden')){
          $('#displayquestions').removeClass('hidden');
        }
      }else{
        if(!$('#displayquestions').hasClass('hidden')){
          $('#displayquestions').addClass('hidden');
        }
      }
      
    });
  });
</script>
