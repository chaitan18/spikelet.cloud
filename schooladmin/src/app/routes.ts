import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { HeaderComponent } from './header.component';
import { SidebarHeaderComponent } from './sidebarheader.component';

/*-----------------Login Component START ---------------------- */
import { ManagementComponent } from './management.component';
import { TeacherComponent } from './teacher/login.component';
import { TeacherLoginSittingComponent } from './teacher/loginsetting.component';
import { StudentLoginComponent } from './student/login.component';
/*-----------------Login Component END ---------------------- */

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

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },
    {
        path: 'signup', component: UserComponent,
        children: [{ path: '', component: SignUpComponent }]
    },
    {
        path: 'login', component: UserComponent,
        children: [{ path: '', component: SignInComponent }]
    },
    { path: '', component: ManagementComponent},
    { path: 'teacher', component: TeacherComponent },
    { path: 'teachersetting', component: TeacherLoginSittingComponent },
    { path: 'dashboard', component: TeacherDashboardComponent },
    { path: 'discussionboard', component: TeacherDiscussionComponent },
    { path: 'syllabusposting', component: TeacherSyllabusComponent },
    { path: 'postclassbehaviour', component: TeacherClassbehaviourComponent },
    { path: 'postyoutubevideos', component: TeacheryoutubevideosComponent },
    { path: 'posthomework', component: TeacherPosthomeworkComponent },
    { path: 'posthomework/manualreviewquestions', component: TeacherManualreviewquestionsComponent },
    { path: 'posthomework/studenthomework', component: TeacherStudenthomeworkComponent },
    { path: 'spikelet', component: TeacherSpikeletComponent },
    { path: 'spikelet/questionlist', component: TeacherSpikeletquestionsComponent },
    { path: 'spikelet/reviewquestions', component: TeacherReviewquestionsComponent },
    { path: 'calendar', component: TeacherCalendarComponent },
    { path: 'grade', component: TeacherGradeComponent },
    { path: 'studentlogin', component: StudentLoginComponent },
    { path: 'student/dashboard', component: TeacherDashboardComponent },
    { path: 'student/myclasswork', component: MyclassworkComponent },
    { path: 'student/assignment', component: StudentAssignmentComponent },
    { path: 'student/reviewanswers', component: StudentReviewanswerComponent },
    { path: 'student/videos', component: StudentVideosComponent },
   /* { path : '', redirectTo:'/login', pathMatch : 'full'} */
    
];