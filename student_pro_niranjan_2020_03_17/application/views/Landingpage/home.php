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
      foreach($spikelets as $spikelet){ ?>
         <div class="col-md-4">
            <div class="box box-widget widget-user-2">
               <div class="widget-user-header bg-blue">
                  <h3 class="widget-user-username"><?php echo $spikelet['spikelet_name'];?></h3>
                  <h5 class="widget-user-desc"><?php echo $spikelet['spikelet_alias'];?></h5>
			         <input type="hidden" name="spikelet_id<?php echo $j;?>" id="spikelet_id<?php echo $j;?>" value="<?php echo $spikelet['spikelet_id'];?>" />
			         <input type="hidden" name="spikelet_name<?php echo $j;?>" id="spikelet_name<?php echo $j;?>" value="<?php echo $spikelet['spikelet_name'];?>" />
			         <input type="hidden" name="spikelet_cost<?php echo $j;?>" id="spikelet_cost<?php echo $j;?>" value="<?php echo $spikelet['cost_of_product'];?>" />
               </div>
               <div class="box-footer no-padding">
                  <ul class="nav nav-stacked">
                     <li><a href="#">Projects <span class="pull-right badge bg-blue">31</span></a></li>
                     <li><a href="#">Tasks <span class="pull-right badge bg-aqua">5</span></a></li>
                     <li><a href="#">Cost Rs.<span class="pull-right badge bg-green"><?php echo $spikelet['cost_of_product'];?></span></a></li>
                     <li>
                        <div style="padding: 10px;">
                           <button class="btn btn-success btn-sm" style="vertical-align:middle; float: right; margin-bottom: 10px;" id="submit<?php echo $j;?>"onclick="submitform(<?php echo $j;?>)">Add to Cart</button>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
         <?php $j++;
      }  ?>
   	<script>
         function submitform(i) {
            $('.error').html('');
            var spikelet_id= document.getElementById('spikelet_id'+i).value;
            var spikelet_name= document.getElementById('spikelet_name'+i).value;
            var spikelet_cost= document.getElementById('spikelet_cost'+i).value;
            $.ajax({
               url   :   "<?php echo base_url();?>student/add_to_cart/",
               type  : 'POST',
               dataType: 'json',
               data  :   { 
                  'spikelet_id' : spikelet_id,
                  'spikelet_name' : spikelet_name,   
                  'spikelet_cost' : spikelet_cost   
               },
               error : function() {
                  alert('No sub_topics Found');
                  //sel.append('<option value="">--Select--</option>');
               },      
               success : function(data) {
                  var CART_HTML = data['cartItemsNo'];
                  $("#cartItemsNo").html(CART_HTML);
                  var CART_ITEMS_HTML = '<li class="header">Cart Items '+data['cartItemsNo']+'</li>';
                  data['cart_products'].forEach(function(option, index){
                     CART_ITEMS_HTML += '<li>\
                        <ul class="menu">\
                           <li><a href="#"><h3>'+option.spikelet_name+'-'+option.spikelet_cost+'</h3></a></li>\
                        </ul>\
                     </li>' ;
                  });
                  CART_ITEMS_HTML +='<a href="<?php echo base_url();?>student/gotocart">View all tasks</a></li>';
                  $("#cartItems").html(CART_ITEMS_HTML);
                  $('#submit'+i).attr("disabled", true);
                  alert("Product Added Successfully");
               }     
            });
            // window.location = "<?php echo site_url();?>Student/getQuizs/"+spikelet_id+"/"+subject_id+"/"+topics;
         }
      </script>
      <div class="col-lg-12">
        <a href="<?php echo base_url(); ?>Student/examspage" class="btn-success btn-sm" style="float: right;">Spikelet page</a>
      </div>
   </section>
   <!-- /.content -->
</div>
  <!-- /.content-wrapper -->