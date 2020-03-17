import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class StudentVideosComponent implements OnInit {
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

