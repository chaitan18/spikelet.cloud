import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';


@Component({
  selector: 'app-teacherspikelet',
  templateUrl: './spikelet.component.html',
  styleUrls: ['./spikelet.component.css']
})
export class TeacherSpikeletComponent implements OnInit {
  datalabel:any = [];
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
	 $(document).ready(function(){
   $(".quizname_show").hide();
	   $('#menuToggle').on('click', function(event) {
	     $('body').toggleClass('open');
	   });
     $("#selctQuiz").change(function(){
        
        var cqa =$("#selctQuiz").val();
        if(cqa == 'cqa'){
          $(".selectquiz_hide").hide();
          $(".quizname_show").show();
            return false;
        }
      });
     $(".selectquizenable").click(function(){
        
          $("#selctQuiz").val(0);
          $(".selectquiz_hide").show();
           $(".quizname_show").hide();
             return false;
      });
     $( "#quiz_search_criteria_form" ).submit(function() {
       
         $(".quiz_search_criteria_list").show();
         return false;
      });
       $(".quiz_removelist").click(function(){
          $(".quiz_search_criteria_list").hide();
             return false;
        });

         $(".selectedradio").click(function(){
          var selectedradioval =  $('input[name=selectedradio]:checked').val(); 
          if(selectedradioval =='addquestion'){
             $(".showdivforaddquestion").show();
              $(".addquizsubmit").hide();
              $(".showdivforspikeletquestion").show();
          }
        //   else if(selectedradioval =='spikeletquestion'){
        //     $(".showdivforspikeletquestion").show();
        //     $(".showdivforaddquestion").hide();
        //      $(".addquizsubmit").hide();
        //  }
         else{
             $(".showdivforaddquestion").hide();
             $(".addquizsubmit").show();
             $(".showdivforspikeletquestion").hide();
             
          }
        });
        

        /* add next/previous buttons to all class body_next */
  $(".body_next").append('<button type="button" class="btn btn-success btn-sm next">Next &#62;</button>&nbsp;');
  $(".body_next").append('<button type="button" class="btn btn-secondary btn-sm prev" style="display:none">&#60; Previous</button>');

  var tracker = 1;
  var n = $(".section_next").length;

  /* hide all section_next except the first */
  $(".body_next").each(function() {
    $(".section_next:not(:first)", this).hide();
  });

  $(".next").click(function() {
    $(".section_next:visible").next(".section_next:hidden").show().prev(".section_next:visible").hide();

    tracker++;

    /* show previous button if displayed section is not the first one */
    if (tracker > 1) {
      $(".prev").show();
    }

    /* hide next button if displayed section is the last one */
    if (tracker == n) {
      $(".next").hide();
    }
  });

  $(".prev").click(function() {
    $(".section_next:visible").prev(".section_next:hidden").show().next(".section_next:visible").hide();

    tracker = tracker - 1;

    /* show next button if displayed section is not the first one */
    if (tracker > 1) {
      $(".next").show();
    }

    /* hide previous button if displayed section is the first one */
    if (tracker == 1) {
      $(".prev").hide();
    }
  });
        /*var currentTab = 0;
       showTab(currentTab); 
        function showTab(n) {
          var x = document.getElementsByClassName("tab");
          x[n].style.display = "block";
          if (n == 0) {
            document.getElementById("prevBtn").style.display = "none";
          } else {
            document.getElementById("prevBtn").style.display = "inline";
          }
          if (n == (x.length - 1)) {
            document.getElementById("nextBtn").innerHTML = "Submit";
          } else {
            document.getElementById("nextBtn").innerHTML = "Next";
          }
           step indicator:
          fixStepIndicator(n)
        }
 
        function nextPrev(n) {
        var x = document.getElementsByClassName("tab");
        if (n == 1 && !validateForm()) return false;
        x[currentTab].style.display = "none";
        currentTab = currentTab + n;
        if (currentTab >= x.length) {
        document.getElementById("formcreatequiz").submit();
         return false;
        }
        showTab(currentTab);
        }

        function validateForm() {
          var x, y, i, valid = true;
          x = document.getElementsByClassName("tab");
          y = x[currentTab].getElementsByTagName("input");
          
          for (i = 0; i < y.length; i++) {
           
            if (y[i].value == "") {
             
              y[i].className += " invalid";
            
              valid = false;
            }
          }
          
          if (valid) {
            document.getElementsByClassName("step")[currentTab].className += " finish";
          }
          return valid; 
        }

        function fixStepIndicator(n) {
          var i, x = document.getElementsByClassName("step");
          for (i = 0; i < x.length; i++) {
            x[i].className = x[i].className.replace(" active", "");
          }
          x[n].className += " active";
        } */
     
	});
  }
  public localisation_language:any;
  ngOnInit() {
    let data = {
      "English":[{"heading":[{"spikelet":"Spikelet","dashboard":"Dashboard",}],"add":[{"create_quiz":"Create Quiz","topic":"Topic","sub_topic":"Sub Topic","select_quiz":"Select Quiz","numberofquestionlist":"Number Of Questions Limit","choose_option":"Choose Option","none":"None","add_quesion":"Add Question","create":"Create","reset":"Add Reset"}]}],
      "Telugu":[{"heading":[{"spikelet":"Spikelet","dashboard":"డాష్బోర్డ్",}],"add":[{"create_quiz":"క్విజ్ని సృష్టించండి","topic":"విషయం","sub_topic":"ఉప విషయం","select_quiz":"క్విజ్ ఎంచుకోండి","numberofquestionlist":"ప్రశ్నల సంఖ్య పరిమితి","choose_option":"ఎంపికను ఎంచుకోండి","none":"గమనిక","add_quesion":"ప్రశ్నని జోడించండి","create":"సృష్టించు","reset":"రీసెట్"}]}]    
    }
    this.localisation_language = localStorage.getItem('language_localisation');
    this.datalabel = data[this.localisation_language][0];
 
  }

}

