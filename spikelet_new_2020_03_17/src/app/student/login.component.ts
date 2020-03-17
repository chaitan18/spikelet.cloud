import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm} from '@angular/forms';
import { UserLoginService } from "../service/user-login.service";
import { ChallengeParameters, CognitoCallback, LoggedInCallback,CognitoUtil } from "../service/cognito.service";
import { DynamoDBService } from "../service/ddb.service";

@Component({
  selector: 'app-studentlogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class StudentLoginComponent implements OnInit {
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
   constructor(public router: Router,
    public ddb: DynamoDBService,
    public userService: UserLoginService,private httpClient : HttpClient, public cognitoUtil: CognitoUtil) {
console.log("LoginComponent constructor");
}
  ngAfterViewInit(){ 
  
  
  
  }

  ngOnInit() {
    this.errorMessage = null;
    console.log("Checking if the user is already authenticated. If so, then redirect to the secure site");
    this.userService.isAuthenticated(this);
   
  }

  onLogin() {
    
    if (this.email == null || this.password == null) {
        this.errorMessage = "All fields are required";
        return;
    }
    this.errorMessage = null;
    this.userService.authenticate(this.email, this.password, this);
}

cognitoCallback(message: string, result: any) {
  if (message != null) { //error
      this.errorMessage = message;
      console.log("result: " + this.errorMessage);
      if (this.errorMessage === 'User is not confirmed.') {
          console.log("redirecting");
          this.router.navigate(['/home/confirmRegistration', this.email]);
      } else if (this.errorMessage === 'User needs to set password.') {
          console.log("redirecting to set new password");
          this.router.navigate(['/home/newPassword']);
      }
  } else { //success
   //alert();
//    let useroutput = JSON.stringify(result);
//    let userobject = $.parseJSON(useroutput);
     let userobject = result; 
   let refreshToken=userobject.refreshToken.token;
   let sub = userobject.idToken.payload.sub;
   let nickname = userobject.idToken.payload.nickname;
   let email = userobject.idToken.payload.email;
   let date = new Date().toString();
   let type ="login";
//    let username = userobject.idToken.payload.cognito:username;
//    let groups = userobject.idToken.payload.cognito:groups;
   
let usergroup = userobject.idToken.payload['cognito:groups'];
if(usergroup =="Student"){
    let time = new Date();
    let timestamp = time.getTime();
   let tlogin_details = {
    "userroleflag":"student",
        "checkval": {
            "FilterExpression":"id = :id", 
            "ExpressionAttributeValues":{ ":id" : sub }
        },
        "updatevalue": {
            "Key":{
                "id": sub
            },
            "UpdateExpression": "set nickname = :nickname,email = :email,refreshToken = :refreshToken,logintype = :logintype",
            "ExpressionAttributeValues":{
                ":nickname":nickname,
                ":email":email,
                ":refreshToken":refreshToken,
                ":logintype":type
            },
            "ReturnValues":"UPDATED_NEW"
          },
        "payload": {
            "Item": {
                    "id": sub,
                    "email": email,
                    "nickname": nickname,
                    "activityDate": date,
                    "logintype": type,
                    "refreshToken": refreshToken,
                    "timestamp":timestamp
                }
        }
}

   let teacher_login_details = {
    "accesstoken":refreshToken,
    "userroleflag":"student",
    "loginId":sub,
    "name":nickname,
    "email":email,
}
localStorage.setItem('login_session_details',JSON.stringify(teacher_login_details));  
        this.httpClient.post('https://0x9vtsrc56.execute-api.us-east-2.amazonaws.com/teachersignup',tlogin_details).subscribe((res : any[])=>{
        console.log(res);
        //localStorage.removeItem('login_details');
        });
      this.ddb.writeLogEntry("login");
      localStorage.setItem('studentaccesstoken','STUDENT_ACCESS_TOKEN');
      this.router.navigate(['/student/discussionboard']); 
    }else{
        this.errorMessage = "Invalid Username and Password";
        this.userService.logout();
     }
  }
}

handleMFAStep(challengeName: string, challengeParameters: ChallengeParameters, callback: (confirmationCode: string) => any): void {
  this.mfaStep = true;
  this.mfaData.destination = challengeParameters.CODE_DELIVERY_DESTINATION;
  this.mfaData.callback = (code: string) => {
      if (code == null || code.length === 0) {
          this.errorMessage = "Code is required";
          return;
      }
      this.errorMessage = null;
      callback(code);
  };
}

isLoggedIn(message: string, isLoggedIn: boolean) {
  if (isLoggedIn) {
      
      this.router.navigate(['/teachersetting']);
  }
}

cancelMFA(): boolean {
  this.mfaStep = false;
  return false;   //necessary to prevent href navigation
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

