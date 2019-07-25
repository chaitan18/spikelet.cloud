import { Component, OnInit } from '@angular/core';
declare var $:any; 
//declare const tinyMCE: any;
declare var window: any;
declare var tinyMCE:any;
//declare var getParameter(name: any, dflt: any): any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-teacherposthomework',
  templateUrl: './posthomework.component.html',
  styleUrls: ['./posthomework.component.css']
})
export class TeacherPosthomeworkComponent implements OnInit {
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
                  +'<textarea class="text_editor_content save_button_enabled form-control" style="width:100%;height: 230px;"></textarea>'
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
                   
                   add();   

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

          function add() {
           
            function getParameter(name,dflt) {
              var value = new RegExp(name+"=([^&]*)","i").exec(window.location);
              if (value!=null && value.length>1) return decodeURIComponent(value[1].replace(/\+/g,' ')); else return dflt;
              }
              var lang = getParameter("language","");
              if (lang.length==0) lang="en";
      
              var dir = 'ltr';
              if (lang == 'ar' || lang == 'he'){
              dir = 'rtl';
              }
      
              tinyMCE.init({
              // mode: 'textareas',
              selector : ".text_editor_content",
              theme: 'advanced',
              skin: 'o2k7',
              width : "100%",
              height : "100",				
      
              language: lang, 
              directionality : dir,
      
              plugins : "safari,pagebreak,style,layer,table,save,advhr,advimage,advlink,emotions,iespell,inlinepopups,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras,template,tiny_mce_wiris,pramukhime",
              theme_advanced_buttons1 : "code,|,bold,italic,underline,,undo,redo,|,forecolor,backcolor,|,cut,copy,paste,|,tiny_mce_wiris_formulaEditor,|,fullscreen",
              theme_advanced_buttons2 : ",|,search,|,justifyleft,justifycenter,justifyright,fontselect,fontsizeselect,|,pramukhime,pramukhimeclick,pramukhimeconvert,pramukhimehelp",
              theme_advanced_buttons3 : "",
      
              theme_advanced_toolbar_location : "top",
              theme_advanced_toolbar_align : "left",
              theme_advanced_statusbar_location : "bottom",
              theme_advanced_resizing : true,
      
              // Drop lists for link/image/media/template dialogs
              template_external_list_url : "lists/template_list.js",
              external_link_list_url : "lists/link_list.js",
              external_image_list_url : "lists/image_list.js",
              media_external_list_url : "lists/media_list.js",
      
              // Replace values for the template plugin
              template_replace_values : {
                username : "Some User",
                staffid : "991234"
              }
      
      
              });

          }  
	});
  }
  public localisation_language:any;
  ngOnInit() {
    let data = {
      "English":[{"heading":[{"post_homework":"Post HomeWork","dashboard":"Dashboard",}],"add":[{"create_homework":"Create Homework","assignment_information":"Assignment Information","topic_name":"Topic Name","instruction":"Instruction","total_marks":"Total Marks","numberofquestions":"Number Of Questions","penalty":"Penalty","add_assign":"Add Assign","manual":"Manual","document_type":"Document Type","reset":"Reset","availability":"Availability","make_amt_available":"Make the AMT available","numberofattempts":"Number Of Attempts","allowunsingleattempts":"alllow single attempt","allowunlimitedattempts":"allow unlimited attempts","student_permission":"Student Permission","track_numberofviews":"Track Number of Views","date_time":"Date And Time","limit_availability":"Limit Availability","display_after":"Display After ","due_dates":"Due Dates","display_until":" Display Until","recipients":"Recipients","recipients_note":"(Note : If any students are enrolled in more than one group receiving the same AMT they will submit more than one attempt for this AMT. it may be necessary to provide these submits with an overall grade for the AMT.)","all_student_individually":"All Student Individually","groupofstudent":"Groups Of Student","Create":"Create"}]}],
      "Telugu":[{"heading":[{"post_homework":"హోమ్వర్క్ పోస్ట్","dashboard":"డాష్బోర్డ్",}],"add":[{"create_homework":"Homework సృష్టించండి","assignment_information":"అప్పగించిన సమాచారం","topic_name":"అంశం పేరు","instruction":"ఇన్స్ట్రక్షన్","total_marks":"మొత్తం మార్కులు","numberofquestions":"ప్రశ్నల సంఖ్య","penalty":"పెనాల్టీ","add_assign":"అప్పగించు జోడించండి","manual":"మాన్యువల్","document_type":"దస్తావేజు పద్దతి","reset":"రీసెట్","availability":"లభ్యత","make_amt_available":"AMT అందుబాటులో ఉంది","numberofattempts":"ప్రయత్నాల సంఖ్య","allowunsingleattempts":"అన్నింటినీ ఒకే ప్రయత్నం","allowunlimitedattempts":"అపరిమిత ప్రయత్నాలను అనుమతించండి","student_permission":"విద్యార్థి అనుమతి","track_numberofviews":"వీక్షణల సంఖ్యను ట్రాక్ చేయండి","date_time":"తేదీ మరియు సమయం","limit_availability":"లభ్యత పరిమితి","display_after":"తర్వాత ప్రదర్శించు","due_dates":"వాయిదా తారీఖు","display_until":"ప్రదర్శన వరకు","recipients":"గ్రహీతలు","recipients_note":"(గమనిక: ఏదైనా AMT ను ఒకే AMT స్వీకరించే సమూహంలో ఎవ్వరూ నమోదు చేయకపోతే వారు ఈ AMT కు ఒకటి కంటే ఎక్కువ ప్రయత్నాలను సమర్పించారు, AMT కోసం మొత్తం గ్రేడ్తో ఈ సమర్పణలను అందించడం అవసరం కావచ్చు.)","all_student_individually":"వ్యక్తిగతంగా అన్ని విద్యార్థి","groupofstudent":"స్టూడెంట్ గుంపులు","Create":"సృష్టించు"}]}]    
    }
    this.localisation_language = localStorage.getItem('language_localisation');
    this.datalabel = data[this.localisation_language][0];
 
  }

}

