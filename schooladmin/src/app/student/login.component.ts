import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-studentlogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class StudentLoginComponent implements OnInit {
  
   title = 'ng 5';
   //public local: LocalStorageService, public session: SessionStorageService
  constructor(public router: Router) { }
  ngAfterViewInit(){ 
  
  
  
  }

  ngOnInit() {
    
   
  }

  OnSubmit(userName,password){
     
     localStorage.setItem('studentaccesstoken','STUDENT_ACCESS_TOKEN');
     /*this.router.navigate(['/home']); */
    this.router.navigate(['/student/dashboard']); 
  
 }

}

