<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Payment Page
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li class="active"Payment Page</li>
     
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
    <div id='message'> </div>
        <div class="col-md-8">
             <div class="box">
            <div class="box-header with-border">
              <h3 class="box-title">Cart</h3>
            </div>
			
			<?php
			$countno =  count($cart_products);
			if($countno==0){
				echo "No Products Found";
			}else{			
			?>
            <!-- /.box-header -->
            <div class="box-body">
              <table class="table table-bordered">
                <tr>
                  <th style="width: 10px">#</th>
                  <th>Product Name</th>
                  <th>Product Cost</th>
                  <th style="width: 40px">Action</th>
                </tr>
				  <?php $j=1; 
				  $TotalAmount =0;
				  foreach($cart_products as $cart_product){ 
				   // $topics=$data['topics']; ?> 
							<tr>
							  <td><?php echo $j;?></td>
							  <td><?php echo $cart_product['spikelet_name']; ?></td>
							  <td>
								 <?php echo $cart_product['spikelet_cost']; 
								 
								  $TotalAmount = $TotalAmount+$cart_product['spikelet_cost']?>
							  </td>
							  <td><a href="<?php echo base_url();?>student/removefromcart/<?php echo $cart_product['spikelet_id']; ?>/<?php echo $cart_product['spikelet_name']; ?>/<?php echo $cart_product['spikelet_cost']; ?>" ><button type="button" class="btn btn-block btn-warning">Remove</button></a></td>
							</tr>
							<tr>
						  
					<?php $j++;
				  } 
				  
				?>
	       
              </table>
            </div>
            <!-- /.box-body -->
			
            <div class="box-footer clearfix">
			Total Amount : <?php echo $TotalAmount;?> 
			  <input type="hidden" class="form-control" id="total_amount" name='total_amount' placeholder="Card Number">
             <ul class="pagination pagination-sm no-margin pull-right">
                <li><!--<a href="#">Go for payment</a>--></li>
              </ul>
			 
            </div>
			 <?php
			}
			?>
          </div>
          <!-- /.box -->  
		    <!-- general form elements -->
          <div class="box box-primary">
            <div class="box-header with-border">
              <h3 class="box-title">Payment Details</h3>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
            <form role="form">
              <div class="box-body">
                <div class="form-group">
                  <label for="exampleInputEmail1">Card Details </label>
                  <input type="text" class="form-control" id="cardNo" name='cardNo' placeholder="Card Number">
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">CVV</label>
                  <input type="password" class="form-control" id="cvv" name='cvv' placeholder="CVV">
                </div>
                
                 
              </div>
              <!-- /.box-body -->

              <div class="box-footer">
                <button type="button" id="pay" class="btn btn-primary" onclick="getPay()">Pay</button>
              </div>
            </form>
          </div>
    </section>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
<script>
 function getPay() {
      var student_id = <?php echo $this->session->userdata('login_user_id'); ?>;
      var cardNo = $('input[name="cardNo"]').val();
      var cvv = $('input[name="cvv"]').val();
       var total_amount = $('input[name="total_amount"]').val();
    $.ajax({
      url   :   "<?php echo base_url();?>student/pay/",
      type  : 'POST',
      dataType: 'json',
      data  :   { 
       'student_id' : student_id,
            'cardNo' : cardNo,
            'cvv' : cvv,
            'total_amount' : total_amount
      },
      error : function() {
         $("#message").html('Some thing went wrong please try after some time');
      },      
      success : function(data) {
		  if(data.status==1){
        $("#message").html('<div class="alert alert-success alert-dismissible">\
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\
                <h4><i class="icon fa fa-check"></i> Alert!</h4>\
               '+data.msg+'</div></div>');
		  }else{
			  $("#message").html('<div class="alert alert-danger alert-dismissible">\
                <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>\
                <h4><i class="icon fa fa-check"></i> Alert!</h4>\
               '+data.msg+'</div></div>');
		  }
      }     
    });
  }
  
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