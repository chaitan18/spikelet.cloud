import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class StudentAssignmentComponent implements OnInit {
   //public local: LocalStorageService, public session: SessionStorageService
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
    $(document).ready(function(){
          
      $('#menuToggle').on('click', function(event) {
        $('body').toggleClass('open');
      });  
    
    });  


    
  }

  ngOnInit() {
    
   
  }

}

