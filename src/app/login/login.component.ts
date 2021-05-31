import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {AuthenticationService} from '../authentication/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {InitService} from '../materialize/init.service';
import {CoacheeService} from '../services/coachee.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error;
  success;
  sending: boolean;
  wrongUsernameOrPassword: boolean;
  userUnknown: boolean;
  loginForm;
  title = 'Coachify | Sign in';
  jwt;
  id: number;
  private redirectUrl: string;
  private fragment: string;

  constructor(private formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private router: Router,
              private route: ActivatedRoute,
              private initService: InitService,
              private coacheeService: CoacheeService
  ) {
    this.loginForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
    document.title = this.title;
    this.route.queryParams.subscribe(queryParams => this.redirectUrl = queryParams.redirectUrl);
    this.route.fragment.subscribe(fragment => this.fragment = fragment);
  }

  onSubmit(loginData) {
    loginData.username = loginData.username.toLowerCase();
    this.sending = true;
    this.error = false;
    this.success = false;
    this.authenticationService.login(loginData)
      .subscribe(
        (_ => {
          this.success = true;
          this.initService.initDropdowns();
          this.id = this.authenticationService.getUserId();
          this.router.navigateByUrl(`/coachees/${this.id}/profile-coachee`);
        }),
        (fault => {
          console.log('test');
          this.sending = false;
          if (fault.status === 401) {
            this.wrongUsernameOrPassword = true;
          } else {
            this.error = true;
          }
        })
      );
    this.loginForm.reset();
  }

  logout() {
    this.authenticationService.logout();
  }

  passwordReset(): void {
    console.log(this.loginForm.controls[('username')].value + ' : is the email address we received');
    this.coacheeService.createResetPasswordToken(this.loginForm.controls[('username')].value).subscribe(() => {
      alert('If the email exists in our system then a verification email has been sent to this email address : '
        + this.loginForm.controls[('username')].value);
      this.router.navigateByUrl(`/home`);
    }, (errorResponse: HttpErrorResponse) => {
      alert('The server could not process your email. Make sure there is not a typo.');
    });
  }
}
