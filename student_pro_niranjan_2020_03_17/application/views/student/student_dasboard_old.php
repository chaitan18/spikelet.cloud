<?php
	if ( ! defined('BASEPATH')) exit('No direct script access allowed');
?> 
<script>
	function submitform(i) {
		//alert("czxczxc"+i);
		$('.error').html('');
		var spikelet_id= document.getElementById('spikelet_id'+i).value;
		var subject_id= document.getElementById('subject_id'+i).value;
		var topics= document.getElementById('topics'+i).value;
		if(topics == ''){
			$('.topicerror'+i).html('Select topic');
		}else{
			window.location = "<?php echo site_url();?>index.php/Student_Controller/getQuizs?spikelet_id="+spikelet_id+"&subject_id="+subject_id+"&topics="+topics;
		}
		//alert("<?php echo site_url();?>index.php/Student_Controller/getQuizs?spikelet_id="+spikelet_id+"&subject_id="+subject_id+"&topics="+topics);    	
	}
</script>
 	<?php $this->load->view('student/header'); ?>	
	<?php $this->load->view('student/side_menu');?>
	<div id="Profile" class="tabcontent">
        <h3>Profile</h3>
        <pre>
            Name : XXXX
            Age  : xxxx
            Num  : xxxx
        </pre>
	</div>

	<div id="Notification" class="tabcontent">
        <h3>Notification</h3>
        <p>You got 24 Notification</p> 
	</div>
		
	<div id="Tutorials" class="tabcontent">
  		<div class="container">
  			<div class="row" style="margin-top: 50px;">
  				<div class="col-lg-3">
					<?php $i=1;
						$j=1;
						foreach($dataarray as $data){
							//	foreach($data as $object){
							if($i<3){
								$i=1; ?>									
								</div><div class="col-lg-3">
								<?php }  $topics=$data['topics'];  	?>
								<div class="box">	 
									<div class="strip"><?php echo $data['spikelet_name']."-".$data['subject_name']; ?></div>
										<input type="hidden" name="spikelet_id<?php echo $j;?>" id="spikelet_id<?php echo $j;?>" value="<?php echo $data['spikelet_id'];?>" />
										<input type="hidden" name="subject_id<?php echo $j;?>" id="subject_id<?php echo $j;?>" value="<?php echo $data['subject_id'];?>" />
										<div class="dropdown">
              								<select  name='topics<?php echo $j;?>' class="form-control" id='topics<?php echo $j;?>' style="margin-left: -14px;" >
			  									<option value="" selected='select' >Select Topic</option>
			  									<?php foreach($topics as $topic){
			  										echo "<option value='".$topic['topic_id']."' >".$topic['topic_name']."</option>";
			  									} ?>
			 								</select>
			 								<p class="error topicerror<?php echo $j; ?>" style="color: red;"></p>
            							</div>
            							<div class="info">
											<h5>Quiz Taken: <span class="badge" >24</span> <br><br> Quiz Remaining: <span class="badge" >32</span></h5>
										</div>
										<div class="img-pro">
											<img src="<?php echo base_url();?>img/sm.jpg" height="50" width="50">
										</div>
										<div class="button-margin">
											<button class="button" style="vertical-align:middle" onClick="submitform('<?php echo $j;?>')"><span>Spikelet Details </span></button>
										</div>
								</div>
							<?php	$i++;
							$j++;
						}
						//}
						if($i<3){ ?>
							</div>
						<?php } ?>
	<!-- <div class="col-lg-3">
	
		<div class="box">
			<div class="strip">IXL-Science</div>
			<div class="dropdown">
		     <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Select Topic
		     <span class="caret"></span></button>
		     <ul class="dropdown-menu">
		     <li><a href="#">Aptitude</a></li>
		     <li><a href="#">Technical</a></li>
		     <li><a href="#">English</a></li>
		     </ul>
		    </div>
		    <div class="info">
			<h5>Quiz Taken: <span class="badge" >24</span> <br><br> Quiz Remaining: <span class="badge" >32</span></h5></b></div>
			<div class="img-pro">
			<img src="<?php echo base_url();?>img/sm.jpg" height="50" width="50">
			</div>
			<div class="button-margin">
			<button class="button" style="vertical-align:middle"><span>Spikelet Details </span></button>
			</div>
		</div>	
	</div>
	
	<div class="box">
		<div class="strip">Spikelet-Science</div>
			<div class="dropdown">
             <button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">Select Topic
             <span class="caret"></span></button>
             <ul class="dropdown-menu">
             <li><a href="#">Aptitude</a></li>
             <li><a href="#">Technical</a></li>
             <li><a href="#">English</a></li>
             </ul>
            </div>
            <div class="info">
			<h5>Quiz Taken: <span class="badge" >24</span> <br><br> Quiz Remaining: <span class="badge" >32</span></h5></b></div>
			<div class="img-pro">
			<img src="<?php echo base_url();?>img/sm.jpg" height="50" width="50">
			</div>
			<div class="button-margin">
			<button class="button" style="vertical-align:middle"><span>Spikelet Details </span></button>
		</div>
	</div>		
		
	
	<div class="col-lg-3">
	
	<div class="box">
			<div class="strip">Gurukool-Science</div>
			<div class="dropdown">
             <button class="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown">Select Topic
             <span class="caret"></span></button>
             <ul class="dropdown-menu">
             <li><a href="#">Aptitude</a></li>
             <li><a href="#">Technical</a></li>
             <li><a href="#">English</a></li>
             </ul>
            </div>
            <div class="info">
			<h5>Quiz Taken: <span class="badge" >24</span> <br><br> Quiz Remaining: <span class="badge" >32</span></h5></b></div>
			<div class="img-pro">
			<img src="<?php echo base_url();?>img/sm.jpg" height="50" width="50">
			</div>
			<div class="button-margin">
			<button class="button" style="vertical-align:middle"><span>Spikelet Details </span></button>
			</div>
	</div>		
		
	</div>-->
	
	</div>	
	</div>
  </div>
</div>

<script>
function pageLoading(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
</script>


</body>
</html>