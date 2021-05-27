import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Coach} from '../../model/coach';
import {CoachService} from '../../services/coach.service';
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
  experience: string;
  searchText: string;
  placeHolderTopicName: string;
  placeHolderExperience: string;


  constructor(private coachService: CoachService, private initService: InitService) {
    this.filteredTopic = '';
    this.experience = '';
    this.searchText = '';
    this.placeHolderTopicName = 'Filter By Topic';
    this.placeHolderExperience = 'Filter By Experience';
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
    if (topicName === '') {
      this.placeHolderTopicName = 'Filter By Topic';
    } else {
      this.placeHolderTopicName = topicName;
    }
  }

  filterByExperience(exp: string): void {
    this.experience = exp;
    if (exp === '') {
      this.placeHolderExperience = 'Filter By Experience';
    } else {
      this.placeHolderExperience = exp;
    }
  }
}
