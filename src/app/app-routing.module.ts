import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {ProfileCoacheeComponent} from './users/profile-coachee/profile-coachee.component';
import {BecomeACoachComponent} from './become-a-coach/become-a-coach.component';
import {OverviewCoachesComponent} from './users/overview-coaches/overview-coaches.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'coaches', component: OverviewCoachesComponent},
  {
    path: 'coachees/:id',
    redirectTo: '/coachees/:id/profile-coachee',
    pathMatch: 'full'
  },
  {path: 'coachees/:id/profile-coachee', component: ProfileCoacheeComponent},
  {path: 'coachees/:id/become-a-coach', component: BecomeACoachComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
