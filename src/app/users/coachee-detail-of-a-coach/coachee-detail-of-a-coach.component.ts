import {Component, OnInit} from '@angular/core';
import {Coach} from '../../model/coach';
import {ActivatedRoute} from '@angular/router';
import {CoachService} from '../../services/coach.service';
import {AuthenticationService} from '../../authentication/authentication.service';

@Component({
  selector: 'app-coachee-detail-of-a-coach',
  templateUrl: './coachee-detail-of-a-coach.component.html',
  styleUrls: ['./coachee-detail-of-a-coach.component.css']
})
export class CoacheeDetailOfACoachComponent implements OnInit {

  title: string;
  coach: Coach;

  constructor(
    private route: ActivatedRoute,
    private service: CoachService
  ) {
  }

  ngOnInit(): void {
    this.getCoach(this.route.snapshot.params.idcoach);
  }

  getCoach(id: number): void {
    this.service.getCoach(id).subscribe(coach => {
      this.coach = coach;
      this.title = 'Coachify | ' + this.coach.firstName + ' ' + this.coach.lastName;
      document.title = this.title;
    });
  }

}
