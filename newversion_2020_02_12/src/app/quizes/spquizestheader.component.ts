import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spquizestheader',
  templateUrl: './spquizestheader.component.html',
  styleUrls: ['./spquizestheader.component.css']
})

export class SpquizestHeaderComponent {
  datalabel:any = [];
  constructor(public router: Router) {

    }

    public logdetails:any;
    public localisation_language:any;
    ngOnInit() {
      
      this.logdetails = localStorage.getItem('studentaccesstoken');
      let data = {
        "English":[{"menu":[{"name":"Welcome To MBS"}]}],
        "Telugu":[{"menu":[{"name":"MBS స్వాగతం"}]}]    
      }
      this.localisation_language = localStorage.getItem('language_localisation');
      this.datalabel = data[this.localisation_language][0];
    }
    Logout() {
      localStorage.removeItem('studentaccesstoken');
      this.router.navigate(['/']);
    } 
}