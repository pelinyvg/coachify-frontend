import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CoachService} from '../services/coach.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-profile-coach',
  templateUrl: './update-profile-coach.component.html',
  styleUrls: ['./update-profile-coach.component.css']
})
export class UpdateProfileCoachComponent implements OnInit {
  updateCoachProfileForm = this.formBuilder.group({
    introduction: ['', [Validators.required]],
    availability: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder,
              private coachService: CoachService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  get introduction() {
    return this.updateCoachProfileForm.get('introduction');
  }

  get availability() {
    return this.updateCoachProfileForm.get('availability');
  }

  onSubmit() {
    this.coachService.changeProfile(this.route.snapshot.params.id, this.updateCoachProfileForm.value).subscribe();
  }
}
