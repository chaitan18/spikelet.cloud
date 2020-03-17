import {BrowserModule} from "@angular/platform-browser";
import {NgModule,CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {FormsModule , ReactiveFormsModule} from "@angular/forms";
import { AngularDualListBoxModule } from 'angular-dual-listbox';
import { NgImageSliderModule } from 'ng-image-slider';
import {MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';  // replaces previous Http service
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { MatStepperModule, MatInputModule, MatButtonModule, MatCheckboxModule  } from '@angular/material';
import {AppComponent} from "./app.component";
import {UserRegistrationService} from "./service/user-registration.service";
import {UserParametersService} from "./service/user-parameters.service";
import {UserLoginService} from "./service/user-login.service";
import {CognitoUtil} from "./service/cognito.service";
import {MyUserServService} from './spikelet/my-user-serv.service';

import {routing} from "./app.routes";
import {AboutComponent, HomeComponent, HomeLandingComponent} from "./public/home.component";
import {AwsUtil} from "./service/aws.service";
import {UseractivityComponent} from "./secure/useractivity/useractivity.component";
import {MyProfileComponent} from "./secure/profile/myprofile.component";
import {SecureHomeComponent} from "./secure/landing/securehome.component";
import {JwtComponent} from "./secure/jwttokens/jwt.component";
import {DynamoDBService} from "./service/ddb.service";
import {LoginComponent} from "./public/auth/login/login.component";
import {RegisterComponent} from "./public/auth/register/registration.component";
import {ForgotPassword2Component, ForgotPasswordStep1Component} from "./public/auth/forgot/forgotPassword.component";
import {LogoutComponent, RegistrationConfirmationComponent} from "./public/auth/confirm/confirmRegistration.component";
import {ResendCodeComponent} from "./public/auth/resend/resendCode.component";
import {NewPasswordComponent} from "./public/auth/newpassword/newpassword.component";
import { MFAComponent } from './public/auth/mfa/mfa.component';
import { PagerService } from './_services/index';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
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

import { AppHeaderComponent } from './appheader.component';
import { AppSidebarHeaderComponent } from './appsidebarheader.component';
import { HeaderComponent } from './header.component';
import { SidebarHeaderComponent } from './sidebarheader.component';
import { TestComponent } from './teacher/test.component';
import { AppsComponent } from './apps.component';
import { AppsInfoComponent } from './appsinfo.component';
import { AppsUploadComponent } from './appsupload.component';
import { AppsLoginComponent } from './appslogin.component';
import { AppsBuildComponent } from './appsbuild.component';


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

/*-----------------Spikelet Component START ---------------------- */
import { Tested } from './spikelet/discussionboard.component';
import { SpikeletHomeComponent } from './spikelet/spikelethome.component';
import { SpikeletHeaderComponent } from './spikelet/spikeletheader.component';
import { SpikeletLoginComponent } from './spikelet/spikeletlogin.component';
/*-----------------Spikelet  Component END ---------------------- */

/*-----------------Spikelet Quizes Component START ---------------------- */
import { SpquizesHomeComponent } from './quizes/spquizeshome.component';
import { SpquizesHeaderComponent } from './quizes/spquizesheader.component';
import { SpquizesDashboardComponent } from './quizes/spquizesdashboard.component';
import { SpquizesQuizpageComponent } from './quizes/spquizesquizpages.component';
import { SpquizesQuiztestComponent } from './quizes/spquizesquiztest.component';

import { SpquizestDashboardComponent } from './quizes/spquizestdashboard.component';
import { SpquizestHeaderComponent } from './quizes/spquizestheader.component';
import { spquiztAddquestionComponent } from './quizes/spquiztaddquestion.component';
import { spquiztViewquestionComponent } from './quizes/spquiztviewquestion.component';
import { spquiztBulkquestionComponent } from './quizes/spquiztbulkquestion.component';
// import { SpquizesLoginComponent } from './quizes/spikeletlogin.component';
/*-----------------Spikelet  Quizes Component END ---------------------- */


@NgModule({
    declarations: [
        ManagementComponent,
        AppHeaderComponent,
        AppSidebarHeaderComponent,
        AppsUploadComponent,
        AppsLoginComponent,
        AppsBuildComponent,
        TeacherLoginComponent,
        TeacherLoginSittingComponent,
        NewPasswordComponent,
        LoginComponent,
        LogoutComponent,
        RegistrationConfirmationComponent,
        ResendCodeComponent,
        ForgotPasswordStep1Component,
        ForgotPassword2Component,
        RegisterComponent,
        MFAComponent,
        AboutComponent,
        HomeLandingComponent,
        HomeComponent,
        UseractivityComponent,
        MyProfileComponent,
        SecureHomeComponent,
        JwtComponent,
        AppComponent,
        AppsInfoComponent,
        TeacherDashboardComponent,
        HeaderComponent,
        SidebarHeaderComponent,
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
        TeacherPostlecturerComponent,
        TeacherExamdetailsComponent,
        TeacherRegisterComponent,
        TeacherStudentsComponent,
        TestComponent,
        // MyclassworkComponent,
        StudentAssignmentComponent,
        StudentReviewanswerComponent,
        StudentVideosComponent,
        StudentDiscussionboardComponent,
        StudentChatComponent,
        StudentMailComponent,
        StudentLoginComponent,
        AdminLoginComponent,
        AdminDashboardComponent,
        AdminBatchComponent,
        AdminClassComponent,
        AdminSectionComponent,
        AdminSubjectComponent,
        AdminBatchwiseclassComponent,
        AdminBatchadComponent,
        ParentLoginComponent,
        AppsComponent,
        SpikeletHomeComponent,
        Tested,
        SpikeletHeaderComponent,
        SpikeletLoginComponent,
        SpquizesHomeComponent,
        SpquizesHeaderComponent,
        SpquizestHeaderComponent,
        spquiztAddquestionComponent,
        spquiztViewquestionComponent,
        spquiztBulkquestionComponent,
        SpquizesDashboardComponent,
        SpquizestDashboardComponent,
        SpquizesQuizpageComponent,
        SpquizesQuiztestComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        AngularDualListBoxModule,
        routing,
        BrowserAnimationsModule,
        MatStepperModule, MatInputModule, MatButtonModule,
        ReactiveFormsModule,MatCheckboxModule,
        MultiSelectAllModule,
        NgImageSliderModule,
        Ng4LoadingSpinnerModule.forRoot()

    ],
    providers: [
        CognitoUtil,
        AwsUtil,
        DynamoDBService,
        UserRegistrationService,
        UserLoginService,
        UserParametersService,PagerService,MyUserServService],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
      ]
})
export class AppModule {
}
