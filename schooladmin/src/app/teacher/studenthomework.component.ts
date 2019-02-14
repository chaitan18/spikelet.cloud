import { Component, OnInit } from '@angular/core';
declare var $:any;
import { Router } from '@angular/router';
@Component({
  selector: 'app-studenthomework',
  templateUrl: './studenthomework.component.html',
  styleUrls: ['./studenthomework.component.css']
})
export class TeacherStudenthomeworkComponent implements OnInit {
 
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
	 $(document).ready(function(){
	   $('#menuToggle').on('click', function(event) {
	     $('body').toggleClass('open');
	   });

       $('#example').DataTable({
           "bPaginate": false,
          "bLengthChange": false,
          "bFilter": false,
          "bInfo": false,
          "bAutoWidth": false
        });

      $( ".addmarks" ).keyup(function() {
         var sumofstudentmarks = 0;
        $('input[name^="addmarks"]').each(function() {  
            sumofstudentmarks += Number($(this).val());
           $(".sumofstudentmarks").val(sumofstudentmarks);
         });
      });
     
	});
  }
  ngOnInit() {
    
 
  }

}

