import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidebarheader',
  templateUrl: './sidebarheader.component.html',
  styleUrls: ['./sidebarheader.component.css']
})

export class SidebarHeaderComponent {
  constructor(public router: Router) {

    }

    public logdetails:any;
    ngOnInit() {
      
      this.logdetails = localStorage.getItem('studentaccesstoken');
     
    }
}