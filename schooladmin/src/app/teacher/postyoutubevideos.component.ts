import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacherpostyoutubevideos',
  templateUrl: './postyoutubevideos.component.html',
  styleUrls: ['./postyoutubevideos.component.css']
})
export class TeacheryoutubevideosComponent implements OnInit {
 
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
	 $(document).ready(function(){
	   $('#menuToggle').on('click', function(event) {
	     $('body').toggleClass('open');
	   });
     $(".search_criteria_checkbox").click(function(){
        var selectedradioval =  $('input[name=search_criteria_checkbox]:checked').val();
        if(selectedradioval =='homework'){
           $(".search_criteria_div").show();
        }else{
           $(".search_criteria_div").hide();
        }
       
      });

      $(".add_schedule").click(function(){

         $(".add_schdule_show").slideToggle("slow");
      });

      $(".list_schedule").click(function(){

         $(".list_schdule_show").slideToggle("slow");
      });

      /*$("#append").click( function(e) {
          e.preventDefault();

                  $(".inc").append('<div class="col col-md-2">\
          <label for="text-input" class="remove_this form-control-label">\
          <img class="irc_mi" src="assets/images/logo/removeimg.png" alt="Image result for add icon in" style="height: 65px;cursor: pointer;" >\
          </label>\
          </div>\
          <div class="col-12 col-md-5">\
          <label for="company" class=" form-control-label">Youtube Link</label>\
          <input type="text" class="form-control" name="text" placeholder="Please Enter Youtube Link"/>\
          </div>\
          <div class="col-12 col-md-5">\
          <label for="company" class=" form-control-label">Link Description</label>\
          <textarea class="form-control" name="textbox"  placeholder="Please Enter Link Description"></textarea>\
          </div>');
                  return false;
                  });

              jQuery(document).on('click', '.remove_this', function() {
                  jQuery(this).parent().remove();
                  return false;
                  }); */
      
	     });
  }
  ngOnInit() {
    
 
  }

}

