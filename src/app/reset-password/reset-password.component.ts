import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoacheeService} from '../services/coachee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Coachee} from '../model/coachee';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordId: string;

  private resetPasswordForm = this.formBuilder.group(
    {
      resetPasswordId: this.resetPasswordId,
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[A-Z])(?=\\S+$).{8,}')]],
      passwordVerification: ['', [Validators.required]]
    }, {validator: ConfirmedValidator('password', 'passwordVerification')}
  );

  constructor(
    private formBuilder: FormBuilder,
    private coacheeService: CoacheeService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.resetPasswordId = params.token;
      console.log(this.resetPasswordId);
    });
  }

  get registerForm(): FormGroup {
    return this.resetPasswordForm;
  }

  get email() {
    return this.resetPasswordForm.get('email');
  }

  get password() {
    return this.resetPasswordForm.get('password');
  }

  get passwordVerification() {
    return this.resetPasswordForm.get('passwordVerification');
  }

  ngOnInit(): void {
    if (!this.coacheeService.resetPasswordIdExist(this.resetPasswordId)) {
      console.log('working');
      this.router.navigateByUrl(`/home`);
    } else {
      console.log('not working');
    }

    this.resetPasswordForm.reset();
  }

  onSubmit(): void {
    this.coacheeService.changePassword(this.resetPasswordForm.value).subscribe(() => {
      alert('Password has been changed');
      this.resetPasswordForm.reset();
      this.router.navigate([`login`]);
    }, (errorResponse: HttpErrorResponse) => {
      alert('exception');
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

