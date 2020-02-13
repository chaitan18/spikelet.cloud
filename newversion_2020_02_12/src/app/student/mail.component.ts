import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class StudentMailComponent implements OnInit {
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

