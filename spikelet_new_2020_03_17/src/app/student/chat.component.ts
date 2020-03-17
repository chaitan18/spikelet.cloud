import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class StudentChatComponent implements OnInit {
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

