<!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Cart Page
        <small></small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
        <li><a href="#">Cart</a></li>
        <li class="active">Cart Page</li>
      </ol>
    </section>

    <!-- Main content -->
    <section class="content">
    
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
             <ul class="pagination pagination-sm no-margin pull-right">
                 
                <li><a href="<?php echo base_url();?>student/goforpayment/">Go for payment</a></li>
               
                
              </ul 
			 
            </div>
			 <?php
			}
			?>
          </div>
          <!-- /.box -->  
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