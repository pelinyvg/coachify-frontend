import {Component, OnInit} from '@angular/core';
import {Coach} from '../../model/coach';
import {CoachService} from '../../services/coach.service';
import {Topic} from '../../model/topic';

@Component({
  selector: 'app-overview-coaches',
  templateUrl: './overview-coaches.component.html',
  styleUrls: ['./overview-coaches.component.css']
})
export class OverviewCoachesComponent implements OnInit {
  coaches: Coach[];
  topicNames: string[];

  constructor(private coachService: CoachService) {
  }

  ngOnInit(): void {
    this.getCoaches();
    this.getTopics();
  }

  getCoaches(): void {
    this.coachService.getCoaches().subscribe(coaches => {
      this.coaches = coaches;
    });
  }

  getTopics(): void {
    this.coachService.getTopics().subscribe(topicNames => {
      this.topicNames = topicNames;
    });
  }

}
