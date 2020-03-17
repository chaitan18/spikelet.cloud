import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-appslogin',
  templateUrl: './appslogin.component.html',
  styleUrls: ['./appslogin.component.css']
})
export class AppsLoginComponent implements OnInit {
  email: string;
  password: string;
  errorMessage: string;
  mfaStep = false;
//   createtopic:any;
  mfaData = {
      destination: '',
      callback: null
  };
   //public local: LocalStorageService, public session: SessionStorageService
   constructor(public router: Router) {
console.log("LoginComponent constructor");
}
  ngAfterViewInit(){ 
  
  
  
  }

  ngOnInit() {
    this.errorMessage = null;
    console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
    
   
  }

  onLogin() {
    
    if (this.email == null || this.password == null) {
        this.errorMessage = "All fields are required";
        return;
    }else{
        if(this.email =="apps18@gmail.com" && this.password=="123456"){
            this.router.navigate(['/apps']);
        }else{
            alert("Invalid username and password!");
        }
    }
    
}








//   OnSubmit(form: NgForm){
//     if(form.value.email =='studentspikelet18@gmail.com' && form.value.password =='spikelet18'){
//       localStorage.setItem('studentaccesstoken','STUDENT_ACCESS_TOKEN');
//       this.router.navigate(['/student/dashboard']); 
//     }else{
//       alert("Invalid Username And Password");
//     }
//     console.log("=======Testing===="+JSON.stringify(form.value));
    
//  }

}

