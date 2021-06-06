import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CoacheeService} from '../../services/coachee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-update-profile-coachee',
  templateUrl: './update-profile-coachee.component.html',
  styleUrls: ['./update-profile-coachee.component.css']
})
export class UpdateProfileCoacheeComponent implements OnInit {

  firstNameFromServer: string;
  lastNameFromServer: string;
  emailFromServer: string;
  updateCoacheeProfileForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
    }
  );

  constructor(private formBuilder: FormBuilder,
              private coacheeService: CoacheeService,
              private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.coacheeService.getUser(this.route.snapshot.params.id).subscribe(
      coachee => {
        this.firstNameFromServer = coachee.firstName;
        this.lastNameFromServer = coachee.lastName;
        this.emailFromServer = coachee.email;
      }
    );
  }

  get firstName() {
    return this.updateCoacheeProfileForm.get('firstName');
  }

  get lastName() {
    return this.updateCoacheeProfileForm.get('lastName');
  }

  get email() {
    return this.updateCoacheeProfileForm.get('email');
  }

  cancel() {
    this.updateCoacheeProfileForm.reset();
    this.resetUrlAnchor();
    window.location.reload();
  }

  onSubmit() {
    this.coacheeService.updateCoachee(this.route.snapshot.params.id, this.updateCoacheeProfileForm.value)
      .subscribe(
        () => {
          // tslint:disable-next-line:triple-equals
          if (this.authenticationService.getUsername() !== this.email.value) {
            this.authenticationService.logout();
            this.router.navigateByUrl('/login');
          } else {
            this.updateCoacheeProfileForm.reset();
            this.resetUrlAnchor();
            window.location.reload();
          }

        }
      );
  }

  resetUrlAnchor() {
    // @ts-ignore
    window.location = String(window.location).replace(/\#.*$/, '') + '#';
    window.history.replaceState({}, '', window.location.href.slice(0, -1));
  }
}
