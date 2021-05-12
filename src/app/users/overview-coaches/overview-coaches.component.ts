import { Component, OnInit } from '@angular/core';
import {Coach} from '../coach';
import {CoachService} from '../../services/coach.service';

@Component({
  selector: 'app-overview-coaches',
  templateUrl: './overview-coaches.component.html',
  styleUrls: ['./overview-coaches.component.css']
})
export class OverviewCoachesComponent implements OnInit {
  coaches: Coach[];

  constructor(private coachService: CoachService) { }

  ngOnInit(): void {
    this.getCoaches();
  }

  // todo: add navigate to the profile page of the coach
  selectedCoach(coach: Coach): void {

  }

  getCoaches(): void {
    this.coachService.getCoaches().subscribe( coaches => {
      this.coaches = coaches;
    });
  }
}
