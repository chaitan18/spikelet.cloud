 <div class="col-lg-3">
	
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
			<img src="img/sm.jpg" height="50" width="50">
			</div>
			<div class="button-margin">
			<button class="button" style="vertical-align:middle"><span>Spikelet Details </span></button>
			</div>
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
			<img src="img/sm.jpg" height="50" width="50">
			</div>
			<div class="button-margin">
			<button class="button" style="vertical-align:middle"><span>Spikelet Details </span></button>
			</div>
	</div>		
		
	</div>
	
	
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