import { Component, OnInit } from '@angular/core';
import {Coach} from '../../model/coach';
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


  selectedCoach(coach: Coach): void {
    
  }

  getCoaches(): void {
    this.coachService.getCoaches().subscribe( coaches => {
      this.coaches = coaches;
    });
  }
}
