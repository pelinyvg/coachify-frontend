import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CoacheeService} from '../services/coachee.service';
import {Router} from '@angular/router';
import {Coachee} from '../model/coachee';
import {HttpErrorResponse} from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private _coachee: Coachee;


  private _registerForm = this.formBuilder.group(
    {
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[0-9])(?=.*[A-Z])(?=\\S+$).{8,}')]],
      passwordVerification: ['', [Validators.required]]
    }, {validator: ConfirmedValidator('password', 'passwordVerification')}
  );

  constructor(private formBuilder: FormBuilder, private coacheeService: CoacheeService, private router: Router) {
  }


  get coachee(): Coachee {
    return this._coachee;
  }

  get registerForm(): FormGroup {
    return this._registerForm;
  }

  get firstName() {
    return this._registerForm.get('firstName');
  }

  get lastName() {
    return this._registerForm.get('lastName');
  }

  get email() {
    return this._registerForm.get('email');
  }

  get password() {
    return this._registerForm.get('password');
  }

  get passwordVerification() {
    return this._registerForm.get('passwordVerification');
  }

  ngOnInit(): void {
    this._registerForm.reset();
  }

  onSubmit(): void {
    this._coachee = this._registerForm.value;
    this.coacheeService.addCoachee(this._registerForm.value).subscribe(() => {
      alert('Coachee has been registered');
      this._registerForm.reset();
      this.router.navigate([`login`]);
    }, (errorResponse: HttpErrorResponse) => {console.error('error'); });
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

//
// this.restaurantService.getRestaurant(Number(this.activatedRoute.snapshot.paramMap.get('id')))
//   .subscribe((restaurant: Restaurant) => {
//       this.restaurant = restaurant;
//     }, (errorResponse: HttpErrorResponse) => {
//       if (errorResponse.error instanceof ErrorEvent) {
//         console.error('Error event');
//       } else {
//         switch (errorResponse.status) {
//           case 403:
//             this.router.navigateByUrl('/error/403');
//             break;
//           case 401:
//             this.router.navigateByUrl('/login');
//             break;
//           case 404:
//             this.router.navigate(['**']);
//             break;
//           case 500:
//             this.router.navigateByUrl('/error/500');
//         }
//       }
//       console.log(errorResponse.error.message);
//     }
//   );
