import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoacheeService} from '../services/coachee.service';
import {Router} from '@angular/router';
import {Coachee} from '../model/coachee';
import {HttpErrorResponse} from '@angular/common/http';
import {SnackBarService} from '../services/snack-bar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private ecoachee: Coachee;
  title = 'Coachify | Register';
  message: string;

  private eregisterForm = this.formBuilder.group(
    {
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[A-Z])(?=\\S+$).{8,}')]],
      // tslint:disable-next-line:max-line-length
      password: ['', [Validators.required, Validators.pattern('(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])')]],
      passwordVerification: ['', [Validators.required]]
    }, {validator: ConfirmedValidator('password', 'passwordVerification')}
  );

  constructor(private formBuilder: FormBuilder,
              private coacheeService: CoacheeService,
              private router: Router,
              private snackBarService: SnackBarService) {
  }

  ngOnInit(): void {
    document.title = this.title;
    this.eregisterForm.reset();
  }

  get coachee(): Coachee {
    return this.ecoachee;
  }

  get registerForm(): FormGroup {
    return this.eregisterForm;
  }

  get firstName() {
    return this.eregisterForm.get('firstName');
  }

  get lastName() {
    return this.eregisterForm.get('lastName');
  }

  get email() {
    return this.eregisterForm.get('email');
  }

  get password() {
    return this.eregisterForm.get('password');
  }

  get passwordVerification() {
    return this.eregisterForm.get('passwordVerification');
  }

  onSubmit(): void {
    this.ecoachee = this.eregisterForm.value;
    this.coacheeService.addCoachee(this.eregisterForm.value).subscribe(() => {
      this.message = 'Your account has been registered. You will be redirected to the login page.';
      this.snackBarService.openSnackBar(this.message, 'close', 9999999);
      this.eregisterForm.reset();
      this.router.navigate([`login`]);
    }, (errorResponse: HttpErrorResponse) => {
      // tslint:disable-next-line:max-line-length
      this.message = 'There was an error while processing your registering. Please check your email address is not already linked to an account.';
      this.snackBarService.openSnackBar(this.message, 'close', 9999999);
    });
  }
}

export function ConfirmedValidator(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];
    if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({confirmedValidator: true});
    } else {
      matchingControl.setErrors(null);
    }
  };
}
