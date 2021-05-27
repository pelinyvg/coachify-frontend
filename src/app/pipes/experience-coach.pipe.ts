import { Pipe, PipeTransform } from '@angular/core';
import {Coach} from "../model/coach";

@Pipe({
  name: 'experienceCoach'
})
export class ExperienceCoachPipe implements PipeTransform {

  transform(coaches: Coach[], experience: string): Coach[] {
    if (experience === '') {
      return coaches;
    }
    if (experience==='Intermediate') {
      return coaches.filter(coach => coach.topicsByCoach.map(topic => topic.grade1).includes(true));
    } else if (experience==='Medium') {
      return coaches.filter(coach => coach.topicsByCoach.map(topic => topic.grade2).includes(true));
    } else if (experience==='Expert') {
      return coaches.filter(coach => coach.topicsByCoach.map(topic => topic.grade3).includes(true));
    } else {
      return coaches;
    }
  }
}
