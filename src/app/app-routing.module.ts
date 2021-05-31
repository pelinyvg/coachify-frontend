import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {ProfileCoacheeComponent} from './users/profile-coachee/profile-coachee.component';
import {BecomeACoachComponent} from './become-a-coach/become-a-coach.component';
import {OverviewCoachesComponent} from './users/overview-coaches/overview-coaches.component';
import {CoacheeDetailOfACoachComponent} from './users/coachee-detail-of-a-coach/coachee-detail-of-a-coach.component';
import {LoginGuard} from './authentication/guards/login.guard';
import {RequestASessionComponent} from './session/request-a-session/request-a-session.component';
import {NotAuthorizedUserComponent} from './errors/not-authorized-user/not-authorized-user.component';
import {SessionOverviewCoacheeComponent} from './session/session-overview-coachee/session-overview-coachee.component';
import {ResetPasswordComponent} from './reset-password/reset-password.component';
import {ProfileCoachComponent} from './users/profile-coach/profile-coach.component';
import {SessionOverviewCoachComponent} from './session/session-overview-coach/session-overview-coach.component';
import {WrongResetTokenComponent} from './errors/wrong-reset-token/wrong-reset-token.component';
import {CoachProfileChangeComponent} from './users/coach-profile-change/coach-profile-change.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'wrongResetToken', component: WrongResetTokenComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'coachees/:id/coaches', component: OverviewCoachesComponent},
  {
    path: 'coachees/:id',
    redirectTo: '/coachees/:id/profile-coachee',
    pathMatch: 'full'
  },
  {path: 'coachees/:id/profile-coachee', component: ProfileCoacheeComponent, canActivate: [LoginGuard]},
  {path: 'coachees/:id/become-a-coach', component: BecomeACoachComponent, canActivate: [LoginGuard]},
  {path: 'coachees/:id/coaches/:idcoach', component: CoacheeDetailOfACoachComponent},
  {path: 'coachees/:id/coaches/:idcoach/request-a-session', component: RequestASessionComponent},
  {path: 'coachees/:id/not-authorized', component: NotAuthorizedUserComponent},
  {path: 'coachees/:id/sessions', component: SessionOverviewCoacheeComponent},

  // {path: 'coaches/:id', redirectTo: '/coaches/:id/profile-coach', pathMatch: 'full'},
  // {path: 'coaches/:id/profile-coach', component: ProfileCoachComponent, canActivate: [LoginGuard]},
  {path: 'coaches/:id/sessions', component: SessionOverviewCoachComponent},
  {path: 'coaches/:id/profileChange', component: CoachProfileChangeComponent},


  // leave the path: ** always at the end
  {path: '**', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
