import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class TeacherComponent implements OnInit {
   title = 'ng 5';
  constructor(public router: Router) { }

  ngOnInit() {
    localStorage.removeItem('studentaccesstoken');
  }

}

