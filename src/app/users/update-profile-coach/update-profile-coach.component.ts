import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CoachService} from '../../services/coach.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-profile-coach',
  templateUrl: './update-profile-coach.component.html',
  styleUrls: ['./update-profile-coach.component.css']
})
export class UpdateProfileCoachComponent implements OnInit {

  introductionFromServer: string;
  availabilityFromServer: string;
  updateCoachProfileForm = this.formBuilder.group({
    introduction: ['', [Validators.required]],
    availability: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder,
              private coachService: CoachService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.coachService.getCoach(this.route.snapshot.params.id).subscribe(
      coach => {
        this.availabilityFromServer = coach.availability;
        this.introductionFromServer = coach.introduction;
      }
    );
  }

  get introduction() {
    return this.updateCoachProfileForm.get('introduction');
  }

  get availability() {
    return this.updateCoachProfileForm.get('availability');
  }

  onSubmit() {
    this.coachService.changeProfile(this.route.snapshot.params.id, this.updateCoachProfileForm.value).subscribe();
    this.updateCoachProfileForm.reset();
    this.resetUrlAnchor();
    window.location.reload();
  }

  cancel() {
    this.updateCoachProfileForm.reset();
    this.resetUrlAnchor();
    window.location.reload();
  }

  resetUrlAnchor() {
    // @ts-ignore
    window.location = String(window.location).replace(/\#.*$/, '') + '#';
    window.history.replaceState({}, '', window.location.href.slice(0, -1));
  }
}
