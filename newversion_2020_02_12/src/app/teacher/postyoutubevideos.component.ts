import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacherpostyoutubevideos',
  templateUrl: './postyoutubevideos.component.html',
  styleUrls: ['./postyoutubevideos.component.css']
})
export class TeacheryoutubevideosComponent implements OnInit {
  datalabel:any = [];
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
  public localisation_language:any;
  ngOnInit() {
    let data = {
      "English":[{"searchform":[{"search_criteria":"Search Criteria","title":"Title","titlepc":"","bsearch":"Search","breset":"Reset"}],"listform":[{"youtube_link":"Youtube Link","sno":"S.No","title":"Title"}],"heading":[{"upload_youtube_link":"Upload Youtube Link","dashboard":"Dashboard","youtube_list":"Youtube List","create_youtube_link":"Create Youtube Link","online_class_scheduled":"Online Class Scheduled"}],"add":[{"title":"Title","titlepc":"Please Enter Title","youtube_link":"Youtube Link","link_description":"Link Description","submit":"Submit","reset":"Reset","youtube_linkpc":"Please Enter Youtube Link","link_descriptionpc":"Please Enter Link Description"}]}],
      "Telugu":[{"searchform":[{"search_criteria":"శోధన ప్రమాణాలు","title":"టైటిల్","titlepc":"దయచేసి శీర్షికను శోధించండి","bsearch":"శోధన","breset":"రీసెట్"}],"listform":[{"youtube_link":"Youtube లింక్","sno":"క్రమ సంఖ్య","title":"టైటిల్"}],"heading":[{"upload_youtube_link":"Youtube లింక్ని అప్లోడ్ చేయండి","dashboard":"డాష్బోర్డ్","youtube_list":"Youtube జాబితా","create_youtube_link":"Youtube లింక్ని సృష్టించండి","online_class_scheduled":"Online Class Scheduled"}],"add":[{"title":"టైటిల్","titlepc":"దయచేసి శీర్షికను నమోదు చేయండి","youtube_link":"Youtube లింక్","link_description":"లింక్ వివరణ","submit":"సమర్పించండి","reset":"రీసెట్","youtube_linkpc":"దయచేసి Youtube లింక్ని నమోదు చేయండి","link_descriptionpc":"లింక్ వివరణను నమోదు చేయండి"}]}]    
    }
    this.localisation_language = localStorage.getItem('language_localisation');
    this.datalabel = data[this.localisation_language][0];
 
  }

}

