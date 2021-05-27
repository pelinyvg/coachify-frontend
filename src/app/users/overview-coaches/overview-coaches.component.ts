import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Coach} from '../../model/coach';
import {CoachService} from '../../services/coach.service';
import {Topic} from '../../model/topic';
import {InitService} from '../../materialize/init.service';

@Component({
  selector: 'app-overview-coaches',
  templateUrl: './overview-coaches.component.html',
  styleUrls: ['./overview-coaches.component.css']
})
export class OverviewCoachesComponent implements OnInit, AfterViewInit {
  coaches: Coach[];
  topicNames: string[];
  filteredTopic: string;

  constructor(private coachService: CoachService, private initService: InitService) {
    this.filteredTopic = '';
  }

  ngOnInit(): void {
    this.getCoaches();
    this.getTopics();
  }

  ngAfterViewInit(): void {
    this.initService.initDropdowns();
    this.initService.initSidenav();
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

  filterByTopicName(topicName: string): void {
    this.filteredTopic = topicName;
  }

}
