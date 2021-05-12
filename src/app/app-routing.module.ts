import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {ProfileCoacheeComponent} from './users/profile-coachee/profile-coachee.component';
import {OverviewCoachesComponent} from './users/overview-coaches/overview-coaches.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'home', component: HomeComponent},
  {path: 'register', component: RegisterComponent},
  // todo change this path in story 3 or 34
  {path: 'users/blank-profile', component: ProfileCoacheeComponent},
  {path: 'overview-coaches', component: OverviewCoachesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
