import {RouterModule, Routes} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";
import {AboutComponent, HomeComponent, HomeLandingComponent} from "./public/home.component";
import {SecureHomeComponent} from "./secure/landing/securehome.component";
import {MyProfileComponent} from "./secure/profile/myprofile.component";
import {JwtComponent} from "./secure/jwttokens/jwt.component";
import {UseractivityComponent} from "./secure/useractivity/useractivity.component";
import {LoginComponent} from "./public/auth/login/login.component";
import {RegisterComponent} from "./public/auth/register/registration.component";
import {ForgotPassword2Component, ForgotPasswordStep1Component} from "./public/auth/forgot/forgotPassword.component";
import {LogoutComponent, RegistrationConfirmationComponent} from "./public/auth/confirm/confirmRegistration.component";
import {ResendCodeComponent} from "./public/auth/resend/resendCode.component";
import {NewPasswordComponent} from "./public/auth/newpassword/newpassword.component";
/*-----------------Login Component START ---------------------- */
import { ManagementComponent } from './management.component';
import { TeacherLoginComponent } from './teacher/login.component';
import { TeacherLoginSittingComponent } from './teacher/loginsetting.component';
import { StudentLoginComponent } from './student/login.component';
import { AdminLoginComponent } from './admin/login.component';
import { ParentLoginComponent } from './parent/login.component';
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
import { TeacherPostlecturerComponent } from './teacher/postlecturer.component';
import { TeacherExamdetailsComponent } from './teacher/examdetails.component';
import { TeacherRegisterComponent } from './teacher/register.component';
import { TeacherStudentsComponent } from './teacher/students.component';
/*-----------------Teacher Module Component END ---------------------- */


/*-----------------Student Module Component START ---------------------- */
// import { MyclassworkComponent } from './student/myclasswork.component';
import { StudentAssignmentComponent } from './student/assignment.component';
import { StudentReviewanswerComponent } from './student/reviewanswers.component';
import { StudentVideosComponent } from './student/videos.component';
import { StudentDiscussionboardComponent } from './student/discussionboard.component';
import { StudentChatComponent } from './student/chat.component';
import { StudentMailComponent } from './student/mail.component';
/*-----------------Student Module Component END ---------------------- */


/*-----------------Admin Module Component START ---------------------- */
import { AdminDashboardComponent } from './admin/dashboard.component';
import { AdminBatchComponent } from './admin/batch.component';
import { AdminClassComponent } from './admin/class.component';
import { AdminSectionComponent } from './admin/section.component';
import { AdminSubjectComponent } from './admin/subject.component';
import { AdminBatchwiseclassComponent } from './admin/batchwiseclass.component';
import { AdminBatchadComponent } from './admin/batchad.component';
/*-----------------Student Module Component END ---------------------- */

import { AppsComponent } from './apps.component';
import { AppsInfoComponent } from './appsinfo.component';
import { AppsUploadComponent } from './appsupload.component';
import { AppsLoginComponent } from './appslogin.component';
import { AppsBuildComponent } from './appsbuild.component';


/*-----------------Spikelet Component START ---------------------- */
import { SpikeletHomeComponent } from './spikelet/spikelethome.component';
import { SpikeletLoginComponent } from './spikelet/spikeletlogin.component';
/*-----------------Spikelet  Component END ---------------------- */

const homeRoutes: Routes = [
    // {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    // },
    { path: "", component: SpikeletLoginComponent},
    { path: "exammanagement", component: ManagementComponent},
    { path: "spikelethome", component: SpikeletHomeComponent},
    { path: "apps", component: AppsComponent},
    { path: "appsinfo", component: AppsInfoComponent},
    { path: "appsupload", component: AppsUploadComponent},
    { path: "appslogin", component: AppsLoginComponent},
    { path: "appsbuild", component: AppsBuildComponent},
    { path: "teacher", component: TeacherLoginComponent},
    { path: "teachersetting", component: TeacherLoginSittingComponent},
    { path: "dashboard", component: TeacherDashboardComponent },
    { path: "discussionboard", component: TeacherDiscussionComponent },
    { path: "syllabusposting", component: TeacherSyllabusComponent },
     { path: "postclassbehaviour", component: TeacherClassbehaviourComponent },
     { path: "postyoutubevideos", component: TeacheryoutubevideosComponent },
     { path: "posthomework", component: TeacherPosthomeworkComponent },
     { path: "posthomework/manualreviewquestions", component: TeacherManualreviewquestionsComponent },
     { path: "posthomework/studenthomework", component: TeacherStudenthomeworkComponent },
     { path: "spikelet", component: TeacherSpikeletComponent },
     { path: "spikelet/questionlist", component: TeacherSpikeletquestionsComponent },
     { path: "spikelet/reviewquestions", component: TeacherReviewquestionsComponent },
     { path: "calendar", component: TeacherCalendarComponent },
     { path: "grade", component: TeacherGradeComponent },
     { path: "postlecturermaterial", component: TeacherPostlecturerComponent },
     { path: "examdetails", component: TeacherExamdetailsComponent },
     { path: "teacherregister", component: TeacherRegisterComponent },
     { path: "students", component: TeacherStudentsComponent },
     { path: 'student/dashboard', component: StudentAssignmentComponent },
    // { path: 'student/myclasswork', component: MyclassworkComponent },
    { path: 'student/assignment', component: StudentAssignmentComponent },
    { path: 'student/reviewanswers', component: StudentReviewanswerComponent },
    { path: 'student/videos', component: StudentVideosComponent },
    { path: 'student/discussionboard', component: StudentDiscussionboardComponent },
    { path: 'student/chat', component: StudentChatComponent },
    { path: 'student/mail', component: StudentMailComponent },
    { path: 'studentlogin', component: StudentLoginComponent },
    { path: 'adminlogin', component: AdminLoginComponent },
    { path: "admin/dashboard", component: AdminDashboardComponent },
    { path: "batch", component: AdminBatchComponent },
    { path: "class", component: AdminClassComponent },
    { path: "section", component: AdminSectionComponent },
    { path: "subject", component: AdminSubjectComponent },
    { path: "batchwiseclass", component: AdminBatchwiseclassComponent },
    { path: "batchad", component: AdminBatchadComponent },
    { path: "parentlogin", component: ParentLoginComponent },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {path: 'about', component: AboutComponent},
            {path: 'login', component: LoginComponent},
            {path: 'register', component: RegisterComponent},
            {path: 'confirmRegistration/:username', component: RegistrationConfirmationComponent},
            {path: 'resendCode', component: ResendCodeComponent},
            {path: 'forgotPassword/:email', component: ForgotPassword2Component},
            {path: 'forgotPassword', component: ForgotPasswordStep1Component},
            {path: 'newPassword', component: NewPasswordComponent},
            {path: '', component: HomeLandingComponent}
        ]
    },
    
];

const secureHomeRoutes: Routes = [
    {

        path: '',
        redirectTo: '/securehome',
        pathMatch: 'full'
    },
    {
        path: 'securehome', component: SecureHomeComponent, children: [
        {path: 'logout', component: LogoutComponent},
        {path: 'jwttokens', component: JwtComponent},
        {path: 'myprofile', component: MyProfileComponent},
        {path: 'useractivity', component: UseractivityComponent},
        {path: '', component: MyProfileComponent}]
    }
];

const routes: Routes = [
    {
        path: '',
        children: [
            ...homeRoutes,
            ...secureHomeRoutes,
            {
                path: '',
                component: HomeComponent
            }
        ]
    },


];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
