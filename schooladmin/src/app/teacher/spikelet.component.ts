import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';


@Component({
  selector: 'app-teacherspikelet',
  templateUrl: './spikelet.component.html',
  styleUrls: ['./spikelet.component.css']
})
export class TeacherSpikeletComponent implements OnInit {
 
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
          }else{
             $(".showdivforaddquestion").hide();
             $(".addquizsubmit").show();
             
          }
        });
     
       /* var currentTab = 0;
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
  ngOnInit() {
    
 
  }

}

