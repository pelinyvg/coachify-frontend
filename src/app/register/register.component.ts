import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoacheeService} from '../services/coachee.service';
import {Router} from '@angular/router';
import {Coachee} from '../model/coachee';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private ecoachee: Coachee;
  title = 'Coachify | Register';

  private eregisterForm = this.formBuilder.group(
    {
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern('(?=.*[0-9])(?=.*[A-Z])(?=\\S+$).{8,}')]],
      passwordVerification: ['', [Validators.required]]
    }, {validator: ConfirmedValidator('password', 'passwordVerification')}
  );

  constructor(private formBuilder: FormBuilder, private coacheeService: CoacheeService, private router: Router) {
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
      alert('Your account has been registered. You will be redirected to the login page.');
      this.eregisterForm.reset();
      this.router.navigate([`login`]);
    }, (errorResponse: HttpErrorResponse) => {
      alert('This email is already used');
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
