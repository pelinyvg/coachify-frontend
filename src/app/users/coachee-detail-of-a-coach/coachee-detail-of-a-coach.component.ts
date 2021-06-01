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
  userId: number;
  coachUser = false;
  coachId: number;
  coachIdFromUrl: number;

  constructor(
    private route: ActivatedRoute,
    private service: CoachService,
    private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.coachIdFromUrl = this.route.snapshot.params.idcoach;
    this.getCoach(this.coachIdFromUrl);
    this.service.getCoachIdbyCoacheeId(this.authService.getUserId()).subscribe(
      c => this.coachId = c
    );
  }

  getCoach(id: number): void {
    this.service.getCoach(id).subscribe(coach => {
      this.coach = coach;
      if (this.checkIfTheCoach()) {
        this.coachUser = true;
      }
      this.title = 'Coachify | ' + this.coach.firstName + ' ' + this.coach.lastName;
      document.title = this.title;
    });
  }

  checkIfTheCoach(): boolean {
    return this.coachId == this.coachIdFromUrl;
  }

}
