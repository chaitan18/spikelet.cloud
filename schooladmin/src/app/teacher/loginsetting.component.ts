import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacherloginsetting',
  templateUrl: './loginsetting.component.html',
  styleUrls: ['./loginsetting.component.css']
})
export class TeacherLoginSittingComponent implements OnInit {
   title = 'ng 5';
  constructor(public router: Router) { }

  ngOnInit() {
  }

}

