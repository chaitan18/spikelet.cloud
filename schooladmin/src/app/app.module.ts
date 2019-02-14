import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { UserService } from './shared/user.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { appRoutes } from './routes';
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';

/*-----------------Login Component START ---------------------- */
import { ManagementComponent } from './management.component';
import { TeacherComponent } from './teacher/login.component';
import { TeacherLoginSittingComponent } from './teacher/loginsetting.component';
import { StudentLoginComponent } from './student/login.component';
/*-----------------Login Component END ---------------------- */
import { HeaderComponent } from './header.component';
import { SidebarHeaderComponent } from './sidebarheader.component';

/*-----------------Teacher Module Component START ---------------------- */
import { TeacherDashboardComponent } from './teacher/dashboard.component';
import { TeacherDiscussionComponent } from './teacher/discussionboard.component';
import { TeacherSyllabusComponent } from './teacher/syllabusposting.component';
import { TeacherClassbehaviourComponent } from './teacher/postclassbehaviour.component';
import { TeacheryoutubevideosComponent } from './teacher/postyoutubevideos.component';
import { TeacherPosthomeworkComponent } from './teacher/posthomework.component';
import { TeacherManualreviewquestionsComponent } from './teacher/manualreviewquestions.component';
import { TeacherStudenthomeworkComponent } from './teacher/studenthomework.component';
import { TeacherSpikeletComponent } from './teacher/spikelet.component';
import { TeacherSpikeletquestionsComponent } from './teacher/spikeletquestions.component';
import { TeacherReviewquestionsComponent } from './teacher/reviewquestions.component';
import { TeacherCalendarComponent } from './teacher/calendar.component';
import { TeacherGradeComponent } from './teacher/grade.component';
/*-----------------Teacher Module Component END ---------------------- */

/*-----------------Student Module Component START ---------------------- */
import { MyclassworkComponent } from './student/myclasswork.component';
import { StudentAssignmentComponent } from './student/assignment.component';
import { StudentReviewanswerComponent } from './student/reviewanswers.component';
import { StudentVideosComponent } from './student/videos.component';
/*-----------------Student Module Component END ---------------------- */
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    ManagementComponent,
    TeacherComponent,
    TeacherLoginSittingComponent,
    HeaderComponent,
    SidebarHeaderComponent,
    TeacherDashboardComponent,
    TeacherDiscussionComponent,
    TeacherSyllabusComponent,
    TeacherClassbehaviourComponent,
    TeacheryoutubevideosComponent,
    TeacherPosthomeworkComponent,
    TeacherManualreviewquestionsComponent,
    TeacherStudenthomeworkComponent,
    TeacherSpikeletComponent,
    TeacherSpikeletquestionsComponent,
    TeacherReviewquestionsComponent,
    TeacherCalendarComponent,
    TeacherGradeComponent,
    StudentLoginComponent,
    MyclassworkComponent,
    StudentAssignmentComponent,
    StudentReviewanswerComponent,
    StudentVideosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,AuthGuard,
    ,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : AuthInterceptor,
      multi : true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
