import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacherposthomework',
  templateUrl: './posthomework.component.html',
  styleUrls: ['./posthomework.component.css']
})
export class TeacherPosthomeworkComponent implements OnInit {
 
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


      $('#select_all').on('click',function(){
         
          if(this.checked){
            var r = confirm("Are you sure you want to add the extension due date !");
              if (r == true) {

              } else {
                return false;
              }
              $('.graceperiod_checkbox').each(function(){
                  this.checked = true;
              });
               
          }else{
               $('.graceperiod_checkbox').each(function(){
                  this.checked = false;
              });
          }
          if($('.graceperiod_checkbox:checked').length >0){
                 $('.extension_duedate').show();
                 $('.old_duedate').hide();
                $(".graceperiod_showhide").show();
              }else{
                 $('.extension_duedate').hide();
                 $('.old_duedate').show();
                 $(".graceperiod_showhide").hide();
              }   
          });

          $('.instruction_checkbox').change(function() {
              var instruction_checkbox = $(this).is(':checked');     
              if(instruction_checkbox ==true){
                   $(".texteditor_show").show();
              }else{
                $(".texteditor_show").hide();
              }
          });
         $("#txtEditor").Editor();

         $('#select_penalty_type').on('click',function(){
         var penulty_val = $('#select_penalty_type').val();
         if(penulty_val =='yes'){
          $(".penalty_show").show();
         }else{
          $(".penalty_show").hide();
         }
        }); 
        $(".makeavailabilchecked").click(function(){
            var selectedradioval =  $('input[name=makeavailabilchecked]:checked').val();
            //select add question --
            if(selectedradioval =='makeavailabilchecked'){
               $(".checkedavailable").show();
            }else{
                $(".checkedavailable").hide();
            }
           
          }); 

         $(".addassign").click(function () {  
              var total_marks = $("#total_marks").val();  
              var numberofquestion =  $("#numberofquestion").val();
              $("#modalnumberofquestion").html('Number Of Questions [ '+total_marks+' ]');
              if(total_marks ==''){
                alert('Please Enter Total Marks');
                return false;
              }else if(numberofquestion ==''){
                alert('Please Enter Number Of Questions');
                return false;
              }
              if(total_marks !=''){
               $('#total_marks').attr('readonly', true);
              }
              if(numberofquestion !=''){
                if(numberofquestion > 20){
                  alert('Number Of Questions Limit 20');
                  return false;
                }else{
                  $('#numberofquestion').attr('readonly', true);
                }
              } 

              var assign_type = $('input[name=addassign]:checked').val();
              
              if(assign_type =="manual"){
                  var first_mstringhtml = '<div class="col-lg-12">'
                  +'<div class="card" style="border-radius: 15px;background-color: #fdf8f1;">'
                  +'<div class="card-header">'
                  +'<div class="col-lg-4" >'
                  +'<strong>Manual </strong> Questions'
                  +'</div>'
                  +'<div class="col-lg-4" >'  
                  +'<center>'
                  +'<strong>Number Of Questions [ '+numberofquestion+' ]</strong>'
                  +'</center>'
                  +'</div>'
                  +'<div class="col-lg-4" >'
                  +'<center>'
                  +'<strong>Total Marks [ <span class="totalmanualmarks" style="color:blue;">0</span>/ <span style="color:red;">'+total_marks+' </span>]</strong>'    
                  +'</center>'
                  +'</div>'
                  +'</div>'
                  +'</br>'
                  +'<div class="col-sm-12 add_another_question">'
                  +'<div class="col-sm-1">'
                  +'<div class="form-group" style="text-align: center;">'
                  +'<label for="cc-payment" class="control-label mb-1"><center><b>Q.Id</b></center></label>'
                  +'<input type="text" id="text-input" name="text-input"  class="form-control" value="Q1" disabled><input type="hidden" class="question_id" value="1" disabled>'
                  +'</div>'
                  +'</div>'
                  +'<div class="col-sm-11">'
                  +'<div class="form-group" style="text-align: center;">'
                  +'<label for="cc-payment" class="control-label mb-1"><b>Question</b></label>'
                  +'<div id="manualcanvas_editor_1" class="save_button_enabled" style="height: 230px;" ></div>'
                  +'</div>'
                  +'</div>'
                  +'<div class="col-sm-1">'
                  +'</div>'
                  +'<div class="col-sm-9">'
                  +'<div class="form-group" style="text-align: center;">'
                  +'<label for="cc-payment" class="control-label mb-1" title="you can upload  image for question"><b>Image</b> '
                  /*+'<span class="tooltip1"><img src="images/logo/info.png" style="width:20px;height:20px;">'
                  +'<span class="tooltiptext">you can upload  image for question'
                  +'</span>'*/
                  +'</span></label>'
                  +'<div onclick="$('+'#filePhoto'+').click()" style="background-color: #dfc8ca;">'
                  +'<input type="file" name="userprofile_picture"  id="filePhoto" style="display:block;width:185px;"  />'
                  +'</div>'
                  +'<div class="uploader" >'
                  +'<span class="Imagepreview">Image Preview</span>'
                  +'</div>'
                  +'</div>'
                  +'</div>'
                  +'<div class="col-sm-2">'
                  +'<div class="form-group" style="text-align: center;">'
                  +'<label for="cc-payment" class="control-label mb-1"><b>Max Marks</b></label>'
                  +'<input type="text"  name="manualmarks[]" style="text-align: center;"  class="form-control manualmarks save_button_enabled" placeholder="Marks">'
                  +'</div>'
                  +'</div>'
                  +'</div>'
                  +'<div class="card-footer" style="background-color: #f1e3ee;">'
                  +'<div class="col-sm-12">'
                  +'<center>'
                  +'<button type="button" class="btn btn-primary btn-sm enabled_button" style="background-color: #6c42d2;" disabled>'
                  +'<i class="fa fa-dot-circle-o"></i> Save'
                  +'</button>&nbsp;&nbsp;' 
                  +'<button type="button" class="btn btn-danger btn-sm enabled_another_question" disabled>'
                  +'<center><i class="fa fa-plus"></i>&nbsp; Add Another Question </center>'
                  +'</button>&nbsp;&nbsp;'
                  +'<a href="/posthomework/manualreviewquestions" target="_blank" title="Question Info"><button type="button" class="btn btn-secondary btn-sm" >'
                  +'<i class="menu-icon fa fa-search"></i> Preview '
                  +'</button></a>'
                  +'</center>'
                  +'</div>'
                  +'</div>'
                  +'</div>'
                  +'</div>';
                  var finalmstring_html =first_mstringhtml;
                   $(".div_assign").html(finalmstring_html);

                 }else if(assign_type =="document"){
                    var first_dstringhtml = '<div class="col-lg-12" >'
                    +'<div class="col-lg-9" style="margin-top: 5px;">'
                    +'<div class="card" style="border-radius: 15px;background-color: #fdf8f1;">'
                    +'<div class="card-header">'
                    +'<div class="col-lg-6" >'
                    +'<strong>Document Type </strong> Questions'
                    +'</div>'
                    +'<div class="col-lg-6" >' 
                    +'<center>'
                    +'<strong>Number Of Questions [ '+numberofquestion+' ]</strong>'
                    +'</center>'
                    +'</div>'
                    +'</div>'
                    +'<div class="card-body card-block">'
                    +'<form action="" method="post" enctype="multipart/form-data" class="form-horizontal">'
                    +'<div class="row form-group">'
                    +'<div class="col-lg-12">'
                    +'<div class="col-lg-3"><label class=" form-control-label">Attach File</label></div>'
                    +'<div class="col-lg-9">'
                    +'<div class="form-check">'
                    +'<div class="checkbox">'
                    +'<label for="checkbox1" class="form-check-label ">'
                    +'<input type="radio" id="AMTfile" name="AMTfile" value="browsemycomputer" class="form-check-input AMTfile" checked>Browse My Computer'
                    +'</label>'
                    +'</div>'
                    +'<div class="checkbox">'
                    +'<label for="checkbox2" class="form-check-label ">'
                    +'<input type="radio" id="radio1" name="AMTfile" value="browsecontentcollection" class="form-check-input AMTfile">Browse Web Link'
                    +'</label>'
                    +'</div>'
                    +'</br>'
                    +'<div class="row form-group attachedfile" >'
                    +'<div class="col-lg-6">'
                    /*+'<input type="file" id="files" name="files" multiple accept="image/*"><br/>'*/
                    +'<input type="file" id="inputFile" name="files" class="form-control-file" accept="image/*">'
                    +'</div>'
                    +'<div class="col-lg-6">'
                    /*+'<img class="irc_mi" src="images/logo/add_icon.ico" data-toggle="modal" data-target="#mediumModal" style="height: 32px;cursor: pointer;">&nbsp;'
                    +'<b style="font-size: 14px;" >Add Eligibility Questions</b>'*/
                    +'</div>'
                    +'</div>'
                    +'<div class="row form-group collectionlink" style="display:none;">'
                    +'<div class="col-lg-12">'
                    +'<input type="text" id="file-input" name="file-input" placeholder="Browse Web Link" class="form-control-file"></div>'
                    +'</div>'
                    +'</div>'
                    +'</div>'
                    +'</div>'
                    +'<div class="col-lg-12 add_iframe">'
                    /*+'<img id="image_upload_preview" src="http://placehold.it/100x100" alt="your image">'*/
                    /*+'<iframe  id="image_upload_preview" class="doc"  style="width: 100%;height: 400px;">'
                    +'</iframe>'*/
                    +'</div>'
                    +'<div class="col-lg-8">'
                    +'</div>'
                    var second_dstringhtml='';
                    var third_dstringhtml = '</div>'
                    +'</form>'
                    +'</div>'
                    +'</div>'
                    +'</div>'
                    +'<div class="col-lg-3" style="margin-top: 5px;">'
                    +'<div class="card" style="border-radius: 15px;background-color: #fdf8f1;">'
                    +'<div class="card-header">'
                    +'<div class="col-lg-12" >'
                    +'<center>'
                    +'<strong>Total Marks  [ '+total_marks+' ]</strong>'    
                    +'</center>'
                    +'</div>'
                    +'</div>'
                    +'<div class="card-body card-block" >'
                    +'<div class="row form-group">'
                    +'<div class="col-lg-6">'
                    +'<center>'
                    +'<h6>Q.Id</h6>'
                    +'</center>'
                    +'</div>'
                    +'<div class="col-lg-6">'
                    +'<h6>Max</h6>'
                    +'</div>'
                    +'</br>'
                    +'<div class="col-lg-12 manualquestion">'
                    +'</div>';
                    var second_dstringhtml='';
                    for ( var d = 1; d <= numberofquestion; d++ ) {
                    second_dstringhtml+='<div class="col-lg-6">'
                    second_dstringhtml+='<center><input type="text" name="questionid" style="text-align: center;"  class="questionid form-control" value="'+d+'" disabled></center>'
                    second_dstringhtml+='</div>'
                    second_dstringhtml+='<div class="col-lg-6">'
                    second_dstringhtml+='<input type="text" name="docmarks[]"  style="text-align: center;" class="docmarks form-control" value="">'
                    second_dstringhtml+='</div>';
                    }
                    second_dstringhtml+='<div class="col-lg-6" style="text-align: center;">'
                    second_dstringhtml+='Total'
                    second_dstringhtml+='</div>'
                    second_dstringhtml+='<div class="col-lg-6">'
                    second_dstringhtml+='<input type="text"  name="text-input"  style="text-align: center;" class="totaldocmarks form-control" value="" readonly>'
                    second_dstringhtml+='</div>';

                    var fourth_dstringhtml ='</div>'
                    +'</div>'
                    +'</div>'
                    +'</div>'
                    +'<div class="col-lg-12">'
                    +'<div class="card-footer" style="background-color: #f1e3ee;">'
                    +'<center><button type="submit" class="btn btn-primary btn-sm">'
                    +'<i class="fa fa-dot-circle-o"></i> Save</button></center>'
                    +'</div>'
                    +'</div>'
                    +'</div>'
                    +'</div>';
                    var finaldstring_html =first_dstringhtml+third_dstringhtml+fourth_dstringhtml;
                    $(".div_assign").html(finaldstring_html);  
                     $(".manualquestion").html(second_dstringhtml);  

                     $(".AMTfile").click(function(){
                        var selectedradioval =  $('input[name=AMTfile]:checked').val();
                        //select add question -- to get Question div template 
                        if(selectedradioval =='browsemycomputer'){
                           $(".attachedfile").show();
                            $(".collectionlink").hide();
                        }else{
                           $(".attachedfile").hide();
                           $(".collectionlink").show();
                        }
                      });


                 }  
          });
	});
  }
  ngOnInit() {
    
 
  }

}

