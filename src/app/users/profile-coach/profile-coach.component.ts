import { Component, OnInit } from '@angular/core';
import {Coach} from '../../model/coach';
import {ActivatedRoute} from '@angular/router';
import {CoachService} from '../../services/coach.service';

@Component({
  selector: 'app-profile-coach',
  templateUrl: './profile-coach.component.html',
  styleUrls: ['./profile-coach.component.css']
})
export class ProfileCoachComponent implements OnInit {

  title: string;
  coach: Coach;

  constructor(
    private route: ActivatedRoute,
    private service: CoachService
  ) {
  }

  ngOnInit(): void {
    this.getCoach();
  }

  getCoach(): void {
    this.service.getCoach(this.route.snapshot.params.id).subscribe(coach => {
      this.coach = coach;
      this.title = 'Coachify | ' + this.coach.firstName + ' ' + this.coach.lastName;
      document.title = this.title;
    });
  }

}
