import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {LoginComponent} from './login/login.component';
import {AppRoutingModule} from './app-routing.module';
import {AuthenticationInterceptor} from './authentication/authentication.interceptor';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HomeComponent} from './home/home.component';
import {NavigationBarComponent} from './navigation-bar/navigation-bar.component';
import {FooterComponent} from './footer/footer.component';
import {RegisterComponent} from './register/register.component';
import {ProfileCoacheeComponent} from './users/profile-coachee/profile-coachee.component';
import {OverviewCoachesComponent} from './users/overview-coaches/overview-coaches.component';
import {BecomeACoachComponent} from './become-a-coach/become-a-coach.component';
import {CoacheeNavbarComponent} from './users/coachee-navbar/coachee-navbar.component';
import {CoacheeNavbarTopComponent} from './users/coachee-navbar-top/coachee-navbar-top.component';
import {CoacheeDetailOfACoachComponent} from './users/coachee-detail-of-a-coach/coachee-detail-of-a-coach.component';
import {RequestASessionComponent} from './session/request-a-session/request-a-session.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NotAuthorizedUserComponent } from './errors/not-authorized-user/not-authorized-user.component';
import { SessionOverviewCoacheeComponent } from './session/session-overview-coachee/session-overview-coachee.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { TopicNameFilterPipe } from './pipes/topic-name-filter.pipe';
import { ExperienceFilterPipe } from './pipes/experience-filter.pipe';
import { TextSearchPipe } from './pipes/text-search.pipe';
import { ExperienceCoachPipe } from './pipes/experience-coach.pipe';
import { ProfileCoachComponent } from './users/profile-coach/profile-coach.component';
import { SessionOverviewCoachComponent } from './session/session-overview-coach/session-overview-coach.component';
import { CoachNavbarSideComponent } from './users/coach-navbar-side/coach-navbar-side.component';
import { WrongResetTokenComponent } from './errors/wrong-reset-token/wrong-reset-token.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavigationBarComponent,
    FooterComponent,
    RegisterComponent,
    ProfileCoacheeComponent,
    BecomeACoachComponent,
    OverviewCoachesComponent,
    CoacheeNavbarComponent,
    CoacheeNavbarTopComponent,
    CoacheeDetailOfACoachComponent,
    RequestASessionComponent,
    NotAuthorizedUserComponent,
    SessionOverviewCoacheeComponent,
    ResetPasswordComponent,
    TopicNameFilterPipe,
    ExperienceFilterPipe,
    TextSearchPipe,
    ExperienceCoachPipe,
    ProfileCoachComponent,
    SessionOverviewCoachComponent,
    CoachNavbarSideComponent,
    WrongResetTokenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    NgxMaterialTimepickerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthenticationInterceptor, multi: true},
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    MatDatepickerModule,
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
