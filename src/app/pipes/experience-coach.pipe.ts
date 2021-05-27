import { Pipe, PipeTransform } from '@angular/core';
import {Topic} from "../model/topic";
import {Coach} from "../model/coach";

@Pipe({
  name: 'experienceCoach'
})
export class ExperienceCoachPipe implements PipeTransform {

  transform(coaches: Coach[], experience: string): Coach[] {
    if (experience === '') {
      return coaches;
    }
    if (experience==='int') {
      return coaches.filter(coach => coach.topicsByCoach.map(topic => topic.grade1).includes(true));
    } else if (experience==='med') {
      return coaches.filter(coach => coach.topicsByCoach.map(topic => topic.grade2).includes(true));
    } else if (experience==='exp') {
      return coaches.filter(coach => coach.topicsByCoach.map(topic => topic.grade3).includes(true));
    } else {
      return coaches;
    }
  }
}
